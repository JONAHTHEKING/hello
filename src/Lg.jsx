// import React, { useState } from "react"
// import Details from "./Details.json"



// const Lg = ({updatestate}) => {


//     function handleSubmit (e){

//         e.preventDefault()
//         // console.log(e.target[0].value)
//         // console.log(e.target[1].value)
//         if(Details.email === email && Details.password === password){
//             updatestate(true)
//         } 
        
//         }

//     const [sta, testa] = useState({

//         email: "",
//         password: ""
//     })

  

//     const {email, password} = sta

//     function handleChange(e){
//         e.preventDefault()
//         const {name,value}=e.target
//         testa({...sta,[name]: value})
//         console.log(sta)

//     }

 
//     return(

//         <>
//         <form onSubmit={handleSubmit}>

// <labe>email</labe>
// <input type="email" name="email" value={email} onChange={handleChange}></input>
// <div>
// <label>password</label>
// <input type="password" name="password" value={password} onChange={handleChange}></input>
// </div>
// <button> login</button>
// </form>
//         </>
//     )

// }
// export default Lg

// import { useState } from "react";


// function Car() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });

//   const updateColor = () => {
//     setCar(previousState => {
//         console.log(previousState)
        
//       return { ...previousState, color: "blue" }
      
    
//     });
    
    
    
    
//   }
  

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//       <button
//         type="button"
//         onClick={updateColor}
//       >Blue</button>
//     </>
//   )
// }

// export default Car
// import { useState, useEffect } from "react";

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   });

//   return (
//     <>
//      <h1>I've rendered {count} times!</h1>;
//      <button>+</button>
//     </>
//   )
 
// }
// export default Timer
// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [calculation, something] = useState(0);

//   useEffect(() => {
//     something(() => count * 2);
//   }, [count]); // <- add the count variable here

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(() => count + 1)}>+</button>
//       <p>Calculation: {calculation}</p>
//     </>
//   );
// }
//  export default Counter
import { useEffect,useState } from 'react';

function ChatRoom() {

  console.log("render")
  const [set, setup] = useState("post")
  useEffect(()=> {
    console.log("hello")
  })

  return(
    <>
    <button onClick={()=> setup("post")}>post</button>
    <button onClick={()=> setup("user")}>user</button>
    <button onClick={()=> setup("comment")}>comment</button>

    <h1>{set}</h1>
    </>
  )
}
export default ChatRoom