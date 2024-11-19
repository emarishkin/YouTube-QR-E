import {QRCodeSVG} from 'qrcode.react';
import { useState } from 'react';

export const QRcodeGenerator= ()=>{

    const [value,setValue]=useState('hello')  
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
        <div>
            {result!==''?<QRCodeSVG value={result} />:null}
            
            <input type="text" value={value} onChange={onChangeHandle} />
            <button type='button' onClick={onClickHandle}>сгенерировать QR</button>
        </div>
    )
}