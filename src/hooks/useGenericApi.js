import {useEffect, useState} from "react";

//usage useGenericApi(()=> api.getAll())

function useGenericApi(apiCallback) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiCallback()
            .then((response) => setData(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [apiCallback]);

    return [data, loading, error];

}

export default useGenericApi
