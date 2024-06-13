import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
//   useEffect(() => {
// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then((res)=> {
//   setMyData(res.data)
// }).catch((error)=> {
//   setIsError(error.message);
// })
//   },[])
  const getApiData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMyData(res.data)
    } catch (error) {
      setIsError(error.message)
    }
  }

  useEffect(() => {
    getApiData()
  }, [])

  return (
    <>
      <h1 className='text-center font-bold text-3xl mt-8'>Data</h1>
      {isError !== "" && <h2 className='text-center text-red-500 mt-4'>{isError}</h2>}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 my-8'>
        {myData.slice(0, 12).map((post) => {
          const { id, title, body } = post;
          return (
            <div className='bg-gray-800 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300' key={id}>
              <h2 className='text-center font-bold mt-2 text-yellow-500 mb-4 text-xl'>{title}</h2>
              <p className='text-center'>{body}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
