import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const GenerateBox = ({ password, selected, message, setMessage }) => {

    const copyToClipBoard = () => {
        let el = document.createElement('textarea');
        el.value = password
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
        setMessage('copied')
        setTimeout(() => {
            setMessage('')
        }, 2000)
    }
  return (
    <div >
        <div className='flex items-center relative'>
            <input className='rounded-sm' type='text' placeholder='generate password here' value={password}/>
            <FontAwesomeIcon 
            icon={faCopy} 
            className='cursor-pointer absolute right-1 font-bold'
            onClick={copyToClipBoard}
            />
        </div>
        <h1 className={`${selected.length <= 0 ? 'text-red-700' : 'text-green-700'} font-bold text-[12px]`}>{selected.length <= 0 ? 'Check one of the boxes' : 'Good to go'}</h1>
    </div>
  )
}
