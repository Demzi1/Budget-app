import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <div className='header-container'>
        <div className = 'header-balance-container'>
            <h1>REACT BUDGET APP</h1>
            <h3>YOUR BALANCE</h3>
            <h1 id='balance'>D{props.balance}.00</h1>
        </div>
        <div className='header-transaction-container'>
            <div className='income'>
                <h5>INCOME</h5>
                <p>+D{props.income}.00</p>
            </div>
            <div className='expense'>
               <h5>EXPENSES</h5>
               <p>-D{props.expense}.00</p>
            </div>

        </div>
        
    </div>
  )
}

export default Header