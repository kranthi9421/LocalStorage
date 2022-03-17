import React,{useState,useEffect} from 'react'


export const LocalReact = () => {


 const getData = ()=>{
     let localData = localStorage.getItem('form')
    return  localData ? JSON.parse(localData) : []
 }   

const [state,setState] = useState(getData())


useEffect(()=>{
    localStorage.setItem('form',JSON.stringify(state))
},[state])

const handleChange = e => {
    setState({...state, [e.target.name] : e.target.value})
}


const handleSubmit = e => {
    e.preventDefault()

    alert(JSON.stringify(state))
}

  return (
    <div>
       <form onSubmit={handleSubmit}>
          <input type='text' name="fullName" value={state.fullName} onChange={handleChange}/>
          <input type='text' name="email" value={state.email} onChange={handleChange}/>
          <input type='text' name="password" value={state.password} onChange={handleChange}/>
         
          <button>Submit</button>
       </form>
   </div>
  )
}
