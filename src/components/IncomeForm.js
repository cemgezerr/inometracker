import React from 'react'
import { useRef } from 'react'

const IncomeForm = ({ income, setIncome }) => {
  return (
    <form className='income-form'>
      <div className='form-inner'>
        <input type='text' name='desc' id='desc' placeholder='Income Description' />
      </div>
    </form>
  )
}

export default IncomeForm