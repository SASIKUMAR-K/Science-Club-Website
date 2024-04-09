import React, { useEffect, useState } from 'react';

const CertificateFetch = (certificateId) => {
	const [jsonData, setJsonData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Fetch CSV file from project directory
				const response = await fetch('../Certificate.csv');
				const csvData = await response.text();

				// Parse CSV data
				const lines = csvData.split('\n');
				const headers = lines[0].split(',');
				const data = [];

				for (let i = 1; i < lines.length; i++) {
					const line = lines[i].split(',');
					if (line.length === headers.length) {
						const obj = {};
						for (let j = 0; j < headers.length; j++) {
							obj[headers[j]] = line[j];
						}
						data.push(obj);
					}
				}

				// Set JSON data in component state
				setJsonData(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);
	console.log(jsonData);

	if (!jsonData) {
		return null;
	}
	const certificate = jsonData.find(
		(item) => item.CertificateId === certificateId
	);
	return certificate || null;
};

export default CertificateFetch;
