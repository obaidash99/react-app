import { useState, useEffect } from 'react';

const useFetch = (url) => {
	// should start with the word use

	const [data, setData] = useState(null);
	const [isLoading, setIsLoadaing] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			fetch(url)
				.then((response) => {
					console.log(response);
					if (!response.ok) {
						throw Error('could not fetch the data from that resource');
					}
					return response.json();
				})
				.then((data) => {
					setData(data);
					setIsLoadaing(false);
					setError(null);
				})
				.catch((err) => {
					setIsLoadaing(false);
					setError(err.message);
				});
		}, 1000);
	}, [url]); // whenever the url changes the function renders again

	return { data, isLoading, error };
};

export default useFetch;
