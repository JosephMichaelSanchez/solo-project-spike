import Chance from 'chance';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StepOne() {

    const dispatch = useDispatch();
    const history = useHistory();

    const generateKeyCode = () => {
        let keyCode = chance.string({ length: 8 })
        console.log(keyCode);

        dispatch({ type: 'SET_KEYCODE', payload: keyCode })



    }




    return (
        <>
        <button onClick={generateKeyCode}>CREATE NEW POD</button>
        </>
    )
}












export default StepOne;