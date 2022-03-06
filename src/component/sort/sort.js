import React, { useState } from 'react';
import './sort.css';

const arr = [100, 95, 90, 85, 76, 70, 64, 55, 45, 35, 25, 15, 10, 5]

const Sort = () => {
    const [arry, setArry] = useState(arr);

    const printAfterTime = (sortedArry, time) => {
        setTimeout(() => {
            setArry(sortedArry)
        },time * 1000)
    }

    const sortArry = (arry) => {
        let seconds = 0;
        for(let i=0; i< arry.length; i++){
            for(let j=0; j<arry.length; j++){
                if(arry[j] > arry[j+1]){
                    [arry[j], arry[j+1]] = [arry[j+1], arry[j]];
                    const copyArry = [...arry]
                    seconds++
                    printAfterTime(copyArry, seconds)
                }
            }
        }
        return;
    }

    return (
        <div className='container'>
            <button className='btn' onClick={() => sortArry(arr)} >Sort</button>
            <div className='sub-container' >
                {arry.map((num, index) => {
                    return(<div key={index} className='bar-num'>
                         <div className='bar' style={{height: `${num*5}px`}} ></div>
                         <p>{num}</p>
                    </div>)
                } )}
            </div>
        </div>
    )
}

export default Sort

