import React from 'react'

export const PasswordLength = ({ passwordLength, setPasswordLength}) => {
  return (
    <div className='flex items-center justify-between mt-5'>
        <h1 className='font-bold'>Password Length</h1>
        <input type='number' max={12} min={5} value={passwordLength} onChange={(e) => setPasswordLength(e.target.value)}/>
    </div>
  )
}
