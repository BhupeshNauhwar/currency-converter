import { useState } from 'react'

import { InputBox } from './components'
import useCurrencyinfo from './hooks/useCurrencyinfo'

function App() {
  const [amount, setamount] = useState('')
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState('')

  const currencyInfo=useCurrencyinfo(from);
  console.log(currencyInfo);
  const options=Object.keys(currencyInfo);
  
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setamount(convertedAmount)
  }
  
  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }
  
  return (
    <div 
    className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat ' style={{
      backgroundImage:`url(https://images.pexels.com/photos/421927/pexels-photo-421927.jpeg?auto=compress&cs=tinysrgb&w=600)`
    }}
    >
      <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
      
      <form onSubmit={(e)=>{
        e.preventDefault();
        convert();
      }}>
        <div className='w-full mb-1'>
            <InputBox
             label="From"
            amount={amount} 
            currencyOptions={options}
            onCurrencyChange={setFrom}
            selectCurrency={from}
            onAmountChange={(amount)=>setamount(amount)}
            
            />          
          </div>
          <div className='relative w-full h-0.5'>

            <button 
            type='button'
            className='absolute left-1/2 
            -translate-x-1/2
            -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
            onClick={swap}
            >Sawp</button>

          </div>
          <div className='w-full mt-1 mb-4'>
            <InputBox 
            label="To"
            amount={convertedAmount} 
            currencyOptions={options}
            onCurrencyChange={(currency)=> setTo(currency)}
            selectCurrency={to}
            
           
            />
          </div>
          <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
            convert {from.toUpperCase()} to  {to.toUpperCase()}
          </button>

      </form>

      </div>
     
    </div>
  )
}

export default App
