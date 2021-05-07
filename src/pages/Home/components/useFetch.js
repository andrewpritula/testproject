import React from 'react'

const useFetch = (url) => {
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(url);
          const json = await res.json();
          setResponse(json);
          if (response) {
            response.cancel();
          }
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    });
    return { response, error };
};
export default useFetch;