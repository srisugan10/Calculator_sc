import React, { useState } from 'react'
import { IoMdBackspace } from "react-icons/io";

function Calc() {
    const [calculation,setCalculation]=useState('')
    const handleClick=(e)=>{
        setCalculation(calculation+(e.target.value))
    }
    const clear=()=>{
        setCalculation("");
    }
    const backspace=()=>{
        setCalculation(calculation.slice(0,-1))
    }
    const handleEqual = () => {
        try {
          const result = new Function('return ' + calculation)();
          setCalculation(String(result));
        } catch (error) {
          setCalculation('NaN');
        }
      };
      const sin=()=>(
        setCalculation(Math.sin(calculation))
     )
     const cos=()=>(
        setCalculation(Math.cos(calculation))
     )
     const tan=()=>(
        setCalculation(Math.tan(calculation))
     )
     const sinInverse = () => {
         setCalculation(Math.asin(calculation));
      };
      const cosInverse=()=>{
        setCalculation(Math.acos(calculation))
      };
      const tanInverse=()=>{
        setCalculation(Math.atan(calculation))
      };
      const log=()=>{
        setCalculation(Math.log(calculation))
      }
      const pi=()=>{
        setCalculation(Math.PI)
      }
      const root=()=>{
        setCalculation(Math.sqrt(calculation))
      }
      const exp=()=>{
        setCalculation(Math.exp(calculation))
      }
  return (
    <div className='container'>
        <h1>CALCULATOR</h1>
        <form>
            <input type="text" value={calculation} placeholder='0'>
            </input>
        </form>
        <br/>
    <div className='keyboard'>
        <button onClick={sin}>sin</button> 
        <button onClick={cos}>cos</button>
        <button onClick={tan}>tan</button>
        <button onClick={log}>log</button>
        <button onClick={sinInverse} style={{fontSize:`15px`}}>sin-1</button> 
        <button onClick={cosInverse} style={{fontSize:`14px`}}>cos-1</button> 
        <button onClick={tanInverse} style={{fontSize:`15px`}}>tan-1</button> 
        <button onClick={pi}>&Pi;</button>
        <button onClick={exp}>e</button>
        <button onClick={root}>&#x221A;</button>
        <button value="(" onClick={handleClick} style={{fontSize:`35px`,textAlign:`center`}}>&#x208D;</button>
        <button value=")" onClick={handleClick} style={{fontSize:`35px`,textAlign:`center`}}>&#x208E;</button>
        <button onClick={clear}>AC</button>
        <button onClick={backspace}><IoMdBackspace /></button>
        <button value="%" onClick={handleClick}>%</button>
        <button value="/" onClick={handleClick}>&#247;</button> 
        <button value="7" onClick={handleClick}>7</button> 
        <button value="8" onClick={handleClick}>8</button>
        <button value="9" onClick={handleClick}>9</button>
        <button value="*" onClick={handleClick}>&times;</button> 
        <button value="4" onClick={handleClick}>4</button> 
        <button value="5" onClick={handleClick}>5</button>
        <button value="6" onClick={handleClick}> 6</button>
        <button value="-" onClick={handleClick}>-</button> 
        <button value="1" onClick={handleClick}>1</button> 
        <button value="2" onClick={handleClick}>2</button>
        <button value="3" onClick={handleClick}>3</button>
        <button value="+" onClick={handleClick}>+</button> 
        <button value="000" onClick={handleClick}>000</button> 
        <button value="0" onClick={handleClick}>0</button> 
        <button value="." onClick={handleClick}>.</button>
        <button onClick={handleEqual} id="calculation">=</button>
        </div>
    </div>
  )
}

export default Calc
