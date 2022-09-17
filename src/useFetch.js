import { useState, useEffect } from 'react';

const useFetch = (url) => {
	// should start with the word use

	const [data, setData] = useState(null);
	const [isLoading, setIsLoadaing] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortCont = new AbortController();
		/*من شان يوقف عمل الفيتش لما نكبس على شي تاني ما يطالع ايرور بالكونسل */

		setTimeout(() => {
			fetch(url, { signal: abortCont.signal })
				.then((response) => {
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
					if (err.name === 'AbortError') {
						console.log('fetch aborted');
					} else {
						setIsLoadaing(false);
						setError(err.message);
					}
				});
		}, 1000);

		return () => abortCont.abort();
	}, [url]); // whenever the url changes the function renders again

	return { data, isLoading, error };
};

export default useFetch;
