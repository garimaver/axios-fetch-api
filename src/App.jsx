import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [myData , setMyData] = useState([]);
  const [isError , setIsError] = useState("");

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
},[])

  return (
    <>
    <h1 className='text-center font-bold text-3xl '>Data</h1>
    {isError !== "" && <h2 className='text-center'>{isError}</h2>}
   <div className='grid grid-cols-2 grid-rows-2 px-2 my-3 '>
    {myData.slice(0,6).map((post)=> {
const {id, title, body} = post;
return(
  <div className='bg-black  border-b-2 border-white' key={id}>
     <h2 className='text-center text-white font-bold mt-6 text-xl'>{title}</h2>
     <p className='text-center text-white'>{body}</p>
  </div>
)
    })}
    </div>
  
    </>
  )
}

export default App
