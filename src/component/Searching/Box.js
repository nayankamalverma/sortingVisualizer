import { useState, useEffect } from "react";
import './box.css'

const Box = ({index, length, colorKey, changeArray}) => {

    const [len, setlen] = useState(length);

    useEffect(()=>{
        setlen(length);
    }, [length])


    const colors = ['#ffb6c1','#bf2fdb', '#ce4b41', '#b9102a', '#ffa500','#c4e871'];

    let barStyle = {
        background: colors[colorKey],
        height: '1.5vw',
    }

    let textStyle = {
        width: '1.5vw',
        position: 'center',
        bottom: '2rem',
        // top: -Math.floor(length/4),
        left: -Math.floor(length / 2) + 11
    }

    let quantityBtnStyle = {
        top: '10vh',
        width: '25px'
    }

    const handleChange = (e) => {
        let val = e.target.value;
        if(val === ''){
            setlen(0);
            changeArray(index, 0);
        }
        else{
            val = parseInt(val);
            if(val>200){
                setlen(200);
                changeArray(index, 200);
            }
            else{
                setlen(val);
                changeArray(index, val);
            }
        }
    }

    // const increment = () => {
    //     setlen(len + 1);
    //     changeArray(index, len + 1);
    // }

    // const decrement = () => {
    //     setlen(len - 1);
    //     changeArray(index, len - 1);
    // }

    return (
        <div className="bar" style={barStyle}>
            <input type="number" style={textStyle} className="text" value={len} onChange={handleChange} />
        </div>
    );
}

export default Box;