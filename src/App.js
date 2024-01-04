import React, { useEffect } from 'react'
import { useState} from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import {nanoid} from 'nanoid'


const App = () => {
    const [budget, setBudget] = useState( 
      ()=> JSON.parse(localStorage.getItem("budget")) ||
    {
        balance:0,
        income:0,
        expense:0,
        amount:"",
        transactionName:""
        
    } )
    const [display, setDisplay]= useState(()=>JSON.parse(localStorage.getItem("display")) || [])
    const [search , setSearch] = useState("");
    const [originalData, setOriginalData] = useState([])

  
     
   useEffect(()=>{
      localStorage.setItem("budget", JSON.stringify(budget))
    },[ budget]) 

   useEffect(()=>{
      localStorage.setItem("display", JSON.stringify(display))
      setOriginalData(display)
    },[ display]) 



    const handleSearch = (event)=>{
      const {value} = event.target;
      setSearch(value);
      
      if(value){
        const results = originalData.filter(item=>(item.name.toLowerCase()).includes(value.toLowerCase()))
        setOriginalData(results)
      }
      else{
        setOriginalData(display)
      }
      

   
    }
     
    const isPositiveInteger = (num)=>{
      let isNum;
      if(num > 0){
        isNum = true;
      }
      else{
        isNum = false;
      }
      return isNum;
    }

    const displayElements = display.map(item=>(
      <div  className key={item.id} onClick={()=>deleteBuget(item.id)}  id='display'>
        {item.name && <button  >delete</button>}
        <h4>{item.name}</h4>
        <h4>{isPositiveInteger(item.amount)?"+" : ""}{item.amount}</h4>
      </div>
    ))

    const originalDataElements = originalData.map(item=>(
      <div  className key={item.id} onClick={()=>deleteBuget(item.id)}  id='display'>
        {item.name && <button  >delete</button>}
        <h4>{item.name}</h4>
        <h4>{isPositiveInteger(item.amount)?"+" : ""}{item.amount}</h4>
      </div>
    ))


    
 

    const handleChange = (event)=>{
      const {name, value} = event.target;
      
      setBudget(prevBudget =>{
        return{
          ...prevBudget,[name]:value
        }
      })
    }
   
      
  
          
          
      
    
      
    
  
    const handleClick = ()=>{
        if(budget.transactionName === ""){
          window.alert("Your transaction dont have a name")
        }
        else if(budget.amount ===  "0" || budget.amount ===  ""){
          window.alert("You amount can't be zero or empty")
        }
        else{
          setBudget(prevBudget=>{
            return{
              ...prevBudget,
            
              transactionName:  "",
              amount:"",
              income: isPositiveInteger((prevBudget.amount))?
              (+prevBudget.amount + (+prevBudget.income)): prevBudget.income,
    
              expense: (prevBudget.amount).startsWith("-")?
              (+prevBudget.expense  - (-prevBudget.amount) ) : prevBudget.expense,
    
              balance:(prevBudget.amount).startsWith("-")?
              (prevBudget.balance - (-prevBudget.amount)) : (prevBudget.balance + (+prevBudget.amount))
            }})

          setDisplay(preDisplay=>{
            return[
              ...preDisplay,
              {name: budget.transactionName,
                amount: budget.amount,
              id:nanoid()}
            ]
          })
        }
       
          
        }

      
          
      


     

      const deleteBuget = (id)=>{
       let filtered = display.filter(item=> item.id !== id);
       setDisplay(filtered);

       let amountDeleted = display.filter(item=> 
         item.id === id
       )

       setBudget(prevBudget =>{
        return{
          ...prevBudget,
          income: Number(amountDeleted[0].amount) < 0? budget.income: budget.income - Number(amountDeleted[0].amount),

          expense:isPositiveInteger( Number(amountDeleted[0].amount)) ? budget.expense  : budget.expense - Number(amountDeleted[0].amount )   ,

          balance: budget.balance - Number(amountDeleted[0].amount ) 
           }
       })
       
      }

  return (
    <div className='app_container'>
        <Header 
        balance = {budget.balance}
        income={budget.income}
        expense={budget.expense}
      
        />
        <Hero
          amountVal = {budget.amount}
          searchVal = {search}
          transactionName = {budget.transactionName}
          amount={budget.amount}
          handleChange={handleChange}
          handleClick = {handleClick}
          displayElements = {displayElements}
          handleSearch = {handleSearch}
          originalDataElements = {originalDataElements}
          display = {display}
          
        />
    </div>
  )
}

export default App
