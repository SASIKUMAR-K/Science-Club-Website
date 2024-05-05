import { useEffect, useState } from 'react';
import axios from 'axios';

const CertificateFetch = ({ certificateId }) => {
	const [jsonData, setJsonData] = useState(null);

	useEffect(() => {
		const fetchCSVData = async () => {
			try {
				const csvUrl = import.meta.env.VITE_REACT_APP_CSV_URL; // Access CSV URL from environment variable
				const response = await axios.get(csvUrl); // Fetch CSV data using Axios
				const parsedCsvData = parseCSV(response.data); // Parse CSV data into JSON
				setJsonData(parsedCsvData);
			} catch (error) {
				console.error('Error fetching CSV data:', error);
			}
		};

		fetchCSVData(); // Fetch CSV data when the component mounts
	}, []);

	function parseCSV(csvText) {
		const rows = csvText.split(/\r?\n/); // Split CSV text into rows
		const headers = rows[0].split(','); // Extract headers (assumes the first row is the header row)
		const data = []; // Initialize an array to store the parsed data
		for (let i = 1; i < rows.length; i++) {
			const rowData = rows[i].split(','); // Split the row
			const rowObject = {};
			for (let j = 0; j < headers.length; j++) {
				rowObject[headers[j]] = rowData[j]; // Map row data to headers
			}
			data.push(rowObject); // Push row object to data array
		}

		return data;
	}
	if (!jsonData) {
		return null;
	}
	console.log(certificateId);
	const certificate = jsonData.find(
		(item) => item.CertificateId === certificateId
	);
	return certificate || null;
};

export default CertificateFetch;
