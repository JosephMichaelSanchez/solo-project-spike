import Chance from 'chance';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StepOne() {

    const dispatch = useDispatch();
    const history = useHistory();

    const generateKeyCode = () => {
        let keyCode = chance.string({ pool: 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789',  length: 8 })
        console.log(keyCode);

        dispatch({ type: 'SET_KEYCODE', payload: keyCode })
        history.push('/newpod');



    }




    return (
        <>
            <button onClick={generateKeyCode}>CREATE NEW POD</button>
        </>
    )
}












export default StepOne;