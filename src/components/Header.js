import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <div className='header-container'>
        <div className = 'header-balance-container'>
            <h1>REACT BUDGET APP</h1>
            <h3>YOUR BALANCE</h3>
            <h1>{props.balance}.00</h1>
        </div>
        <div className='header-transaction-container'>
            <div className='income'>
                <h4>INCOME +{props.income}.00</h4>
            </div>
            <div className='expense'>
               <h4>{!props.expense? "EXPENSES -" : "EXPENSES "} {props.expense}.00</h4>
            </div>

        </div>
        
    </div>
  )
}

export default Header