import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './css/contactUs.css';
import Navbar from './Navbar';
import PreLoader from './PreLoader';

const ContactUsPage = () => {
	const form = useRef();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [nameError, setNameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [messageError, setMessageError] = useState('');
	const [alertMessage, setAlertMessage] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === 'user_name') {
			setName(value);
			validateName(value);
		} else if (name === 'user_email') {
			setEmail(value);
			validateEmail(value);
		} else if (name === 'message') {
			setMessage(value);
			validateMessage(value);
		}
	};

	const validateName = (value) => {
		if (!value.trim()) {
			setNameError('Name is required');
			return false;
		} else if (!/^[a-zA-Z .]+$/.test(value.trim())) {
			setNameError('Name can only contain alphabets, dots, and spaces');
			return false;
		}
		setNameError('');
		return true;
	};

	const validateEmail = (value) => {
		if (!value.trim()) {
			setEmailError('Email is required');
			return false;
		} else if (!/\S+@\S+\.\S+/.test(value.trim())) {
			setEmailError('Please enter a valid email address');
			return false;
		}
		setEmailError('');
		return true;
	};

	const validateMessage = (value) => {
		if (!value.trim()) {
			setMessageError('Message is required');
			return false;
		}
		setMessageError('');
		return true;
	};

	const sendEmail = (e) => {
		e.preventDefault();

		const isNameValid = validateName(name);
		const isEmailValid = validateEmail(email);
		const isMessageValid = validateMessage(message);

		if (isNameValid && isEmailValid && isMessageValid) {
			emailjs
				.sendForm(
					'service_yc3l8qk',
					'template_3cx56ij',
					form.current,
					'qhhZyRiDSlqM2MhXG'
				)
				.then(
					(result) => {
						console.log(result.text);
						setAlertMessage('Message sent successfully!');
						window.alert('Message sent successfully!');
						setName('');
						setEmail('');
						setMessage('');
						setNameError('');
						setEmailError('');
						setMessageError('');
					},
					(error) => {
						console.log(error.text);
						setAlertMessage('An error occurred. Please try again later.');
					}
				);
		} else {
			setAlertMessage('');
		}
	};

	return (
		<>
			<PreLoader />
			<Navbar navState={true} />
			<div className='contactUsFormContainer'>
				<div className='contactUsHead'>Contact us</div>
				<form ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						name='user_name'
						placeholder='Name'
						value={name}
						onChange={handleChange}
					/>
					{nameError && <div className='errorMessage'>{nameError}</div>}
					<br />
					<input
						type='email'
						name='user_email'
						placeholder='Email'
						value={email}
						onChange={handleChange}
					/>
					{emailError && <div className='errorMessage'>{emailError}</div>}
					<br />
					<textarea
						name='message'
						placeholder='Message'
						value={message}
						onChange={handleChange}
					/>
					{messageError && <div className='errorMessage'>{messageError}</div>}
					<br />
					<input type='submit' value='Send' />
					{alertMessage && <div className='successMessage'>{alertMessage}</div>}
				</form>
			</div>
		</>
	);
};

export default ContactUsPage;
