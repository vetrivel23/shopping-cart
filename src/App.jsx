import { Header } from './Components/Header'
import { Navbar } from './Components/Navbar'
import { Producte } from './Components/Producte'
import { Footer } from './Components/Footer'
import React from 'react'
import { useState } from 'react'



const App = () => {

  let data = [
    {
      name:"Fancy Product",
      price1:"$40.00 ",
      price2:"$40.00 ",
     
      star:false,
      sale:false,
      uderline:false,
      viewbtn:true,
      button:false,
    
      id:1
      
    },
    {
      name:"Special Item",
      price1:"$20.00 ",
      price2:"$18.00",
      star:true,
      sale:true,
      uderline:true,
      viewbtn:false,
      button:false,
  
      id:2
    },
    {
      name:"Sale Item",
      price1:"$50.00 ",
      price2:"$25.00",
      star:false,
      sale:true,
      uderline:true,
      viewbtn:false,
      button:false,
 
      id:3
    },
    {
      name:"Popular Item",
      price2:"$40.00",
      star:true,
      sale:false,
      uderline:false,
      viewbtn:false,
      button:false,
  
      id:4
    },
    {
      name:"Sale Item",
      price1:"$50.00 ",
      price2:"$$25.00",
      star:false,
      sale:true,
      uderline:true,
      viewbtn:false,
      button:false,

      id:5
    },
    {
      name:"Special Item",
      price1:"$120.00 ",
      price2:"$280.00",
      star:false,
      sale:false,
      uderline:false,
      viewbtn:true,
      button:false,
  
      id:6
    },
    {
      name:"Special Item",
      price1:"120.00",
      price2:"$18.00",
      star:true,
      sale:true,
      uderline:true,
      viewbtn:false,
      button:false,

      id:7
    },
    {
      name:"Popular Item",
      price2:"$40.00",
      star:true,
      sale:false,
      uderline:false,
      viewbtn:false,
      button:false,

      id:8
    }
   
  ]

  let [datas,setdatas] = useState(data)

  let [value ,setValue]=useState(0)

  return (
   <>
    <Navbar value={value}/>
     <Header/>
     <Producte setdatas={setdatas} datas={datas}  setValue={setValue}  value={value} />
     
     <Footer/>
   </>
  )
}

export default App;
