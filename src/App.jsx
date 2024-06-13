import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [myData , setMyData] = useState([])

  useEffect(() => {
axios.get("https://jsonplaceholder.typicode.com/posts")
.then((res)=> {
  setMyData(res.data)
})
  },[])
  return (
    <>{myData.map((post)=> {
const {id, title, body} = post;
return(
  <div className='card' key={id}>
     <h2>{title}</h2>
     <p>{body}</p>
  </div>
)
    })}
  
    </>
  )
}

export default App
