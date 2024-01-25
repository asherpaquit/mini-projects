import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [blogs, setBlogs] = useState(null) //for blogs
    const [isPending, setIsPending] = useState(true); // for loading
    const [error, setError] = useState(null)

    useEffect(() =>{
        setTimeout(() => {
          fetch(url)
          .then(res => {
            if(!res.ok){
              throw Error("could not fetch the data!"); //catching error!
            }
            return res.json()
          })
          .then((data) => {
            // in this function we are getting the data from db.json
            setBlogs(data);
            setIsPending(false);
          })
          .catch(err => {
            setIsPending(false);
            setError(err.message); // connecting this to your throw Error("could not fetch data")
          })
         },[1000])
        },[url])


        return {error, isPending, blogs}
}

export default useFetch;