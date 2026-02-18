import {useEffect, useState} from "react";
import axios from 'axios'

function useApi(url, method = 'GET', body = null) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(url);
                setData(response.data);

            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url, method, body])


    return [data, loading, error];

}

export default useApi;
