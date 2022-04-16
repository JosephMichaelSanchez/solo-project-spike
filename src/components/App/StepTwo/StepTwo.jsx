import Chance from 'chance';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';





function StepTwo () {

    
    const keyCode = useSelector(store => store.keyCodeReducer);
    const history = useHistory();

    const goBack = () => {
        history.push('/');
    }

    return (
        <>
            <h2>You new pod's Key Code is: {keyCode}</h2> 
            <h3>Store this Key Code someplace safe. People who you invite to your pod will need the Key Code to join.</h3>
            <button onClick={goBack}>BACK</button>
        </>
    )
}


export default StepTwo;