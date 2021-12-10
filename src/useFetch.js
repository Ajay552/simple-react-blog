import { useState, useEffect } from "react";
// this is a custom hook for fetch 
// custom hook must start with use
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortConst = new AbortController();

        // usins set timeout just to simulate async request
        setTimeout(() => {
            fetch(url, {
                signal: abortConst.signal
            })
            .then(res => {
                // console.log(res);
                if(!res.ok){
                    throw Error("could not fetch the data");
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if(err.name === "AbortError"){
                    console.log("fetch aborted");
                } else {
                    setError(err.message);
                    setIsPending(false);
                }
            })
        },1000);

        return () => abortConst.abort();
    }, [url]);

    return { data, isPending, error };

}

export default useFetch;