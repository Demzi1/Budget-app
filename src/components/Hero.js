import React from 'react'
import './Hero.css'
import {BsSearch} from 'react-icons/bs'


const Hero = (props) => {
  return (
    <div className='Hero-container'>
      <div>
      <input type='search'
         placeholder='search your items'
         value={props.searchVal}
         onChange={props.handleSearch}
         name='search'
         />
         <BsSearch onClick={props.handleSearch}/>
        <div id='addItems'>
        </div>
         <h3>Items</h3>
         {props.display.length < 1 && <h4>No items found</h4>}
         <div>
          {props.searchVal? props.originalDataElements : props.displayElements}
         </div>
       
        </div>
        <h3>Add new transaction</h3>
        <label htmlFor='tansaction-name'>Name</label><br/>
        <input 
          type='text' 
          placeholder='Name of transaction'
          id='tansaction-name'
          name='transactionName'
          value={props.transactionName}
          onChange={props.handleChange}
          />

        <label htmlFor='Amount'>Amount</label> <br/>
        <input type='number' 
        placeholder='Negative expense positive income' 
        id='Amount'
        name= 'amount'
        value={props.amountVal}
        onChange={props.handleChange}
        />

        <button onClick={props.handleClick}>ADD TRANSACTION</button>

    </div>

  )
}

export default Hero