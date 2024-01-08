import React from 'react'
import './Hero.css'
import {BsSearch} from 'react-icons/bs'


const Hero = (props) => {
  return (
    <div className='Hero-container'>
        <input type='search'
          placeholder='search your items'
          value={props.searchVal}
          onChange={props.handleSearch}
          name='search'
          id='search-input'
          />
          < BsSearch onClick={props.handleSearch} id='search-icon'/>
          <h3 id='items'>Items</h3>
          <hr></hr>
          {props.display.length < 1 && <h4 id='available-items'>No items found</h4>}
          <div>
            {props.searchVal? props.originalDataElements : props.displayElements}
          </div>
     
        <h3 id='add-new-transaction'>Add new transaction</h3>
        <hr></hr>
        <label id='name-label' htmlFor='tansaction-name'>Name</label><br/>
        <input 
          type='text' 
          placeholder='Name of transaction'
          id='tansaction-name'
          name='transactionName'
          value={props.transactionName}
          onChange={props.handleChange}
          />

        <label id='amount-label' htmlFor='Amount'>Amount</label> <br/>
        <input type='number' 
        placeholder='Negative expense positive income' 
        id='Amount'
        name= 'amount'
        value={props.amountVal}
        onChange={props.handleChange}
        />
        <button id='add-button' onClick={props.handleClick}>ADD TRANSACTION</button>
    </div>
  )
}

export default Hero