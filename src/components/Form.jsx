import React from 'react'
import { checkLists } from '../store/data'

export const Form = ({ handleCheckbox, generatePassword}) => {
  return (
    <form className='flex flex-col gap-2'>
        {
          checkLists.map(check => {
            return(
            <div key={check.id} className='flex items-center gap-2 w-full'>
              <input type='checkbox' value={check.id} onChange={handleCheckbox}/>
              <label htmlFor={check.name}>{check.name}</label>
            </div>
            )
          })
        }
        <button 
            type='submit'
            onClick={generatePassword}
            className='bg-[#FFB80E] p-2 rounded-sm'
        > Generate </button>
    </form>
  )
}
