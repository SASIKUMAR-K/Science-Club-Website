import { useEffect } from 'react';
import './css/preLoader.css';

const Preloader = () => {
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			const container = document.getElementById('container');
			if (container) {
				container.classList.add('loaded');
				const preloader = document.getElementById('preloader');
				if (preloader) {
					setTimeout(() => {
						preloader.remove();
					}, 500);
				}
			}
		}, 4000);

		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<div id='preloader' className='container-preloader'>
			<div id='container' className='animation-preloader'>
				<img src='/img/loading.gif' alt='' width='250px' height='200px' />
				<div className='txt-loading'>
					<span preloader-text='S' className='characters'>
						S
					</span>
					<span preloader-text='C' className='characters'>
						C
					</span>
					<span preloader-text='I' className='characters'>
						I
					</span>
					<span preloader-text='E' className='characters'>
						E
					</span>
					<span preloader-text='N' className='characters'>
						N
					</span>
					<span preloader-text='C' className='characters'>
						C
					</span>
					<span preloader-text='E' className='characters'>
						E
					</span>
				</div>
				<div className='txt-loading'>
					<span preloader-text='C' className='characters preGray'>
						C
					</span>
					<span preloader-text='L' className='characters preGray'>
						L
					</span>
					<span preloader-text='U' className='characters preGray'>
						U
					</span>
					<span preloader-text='B' className='characters preGray'>
						B
					</span>
				</div>
			</div>
			<div className='loader-section section-left'></div>
			<div className='loader-section section-right'></div>
		</div>
	);
};

export default Preloader;
