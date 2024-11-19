import {QRCodeSVG} from 'qrcode.react';
import { useState } from 'react';
import './QrCode.css'

export const QRcodeGenerator= ()=>{

    const [value,setValue]=useState('')  
    const [result,setResult]=useState('')    
    
  

const onClickHandle=(event)=>{
    setResult(value)
    setValue('')
}

const onChangeHandle=(event)=>{
    setValue(event.target.value)
    setResult('')
}

    return(
        <div className='container'>
            <input 
            type="text" 
            value={value} 
            placeholder='Введи текст'
            onChange={onChangeHandle} 
            className='input' />
            <button 
            type='button'
            className='button'
             onClick={onClickHandle}>сгенерировать QR
            </button>
            {result!=='' && (
                <div className='qrWrapper'>
                <QRCodeSVG value={result} size={200}/>
                </div>
                )}
        </div>
    )
}