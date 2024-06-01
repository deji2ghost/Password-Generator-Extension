import { useEffect, useState } from 'react'
import './App.css'
import { PasswordLength } from './components/PasswordLength'
import { GenerateBox } from './components/GenerateBox'
import { Form } from './components/Form'


function App() {

  // const [ symbols, setSymbols ] = useState(true)
  // const [ numbers, setNumbers ] = useState(true)
  // const [ upperCase, setUpperCase ] = useState(true)
  // const [ lowerCase, setLowerCase ] = useState(true)
  const [ passwordLength, setPasswordLength ] = useState(12)
  const [ password, setPassword ] = useState('')
  const [ selected, setSelected ] = useState([])
  const [message, setMessage] = useState('')

  const generatePassword = (e) => {
    e.preventDefault()
    let charset = ''
    let newPassword = ''
    
    if (selected.includes('1')) charset += '!@£$%^&*()';
    if (selected.includes('2')) charset += '0123456789';
    if (selected.includes('3')) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (selected.includes('4')) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for(let i = 0; i <= passwordLength; i++){
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setPassword(newPassword)
  }


  // const [check, setChecked] = useState(false)
  const handleCheckbox = (e) => {
    const isSelected = e.target.checked
    const value = e.target.value
    if(isSelected){
      const clicked = [...selected, value]
      setSelected(clicked)
    }else{
      const unClicked = selected.filter(select => select !== value)
      setSelected(unClicked)
    }
    console.log(selected)
  }

  return (
    <div className='bg-slate-100 p-2 relative'>
      <GenerateBox password={password} selected={selected} message={message} setMessage={setMessage}/>
      <PasswordLength passwordLength={passwordLength} setPasswordLength={setPasswordLength}/>
      <Form handleCheckbox={handleCheckbox} generatePassword={generatePassword}/>
      {message && <p className='bg-black text-white p-2 absolute top-1/2 right-0 left-0 mx-auto w-[30%] text-center'>{message}</p>}
    </div>
  )
}

export default App
