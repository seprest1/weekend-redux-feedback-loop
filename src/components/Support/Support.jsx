import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from 'react';

function Support(){
    const [support, setSupport] = useState(0);

    const dispatch = useDispatch();
    const setSupportReducer = () => {
        if (support >= 1){
            console.log(support);
            const action = {type:'SET_SUPPORT', payload: Number(support)};
            dispatch(action);
            sendToNext();
            if (support < 3){
                const action = {type:'SET_FLAG'};
                dispatch(action);
            }
        }
        else{
            alert('Please fill in a response.');
        }
    }

    const history = useHistory();
    const sendToNext = () => {
        history.push('/comments');
    }

    return(
        <div>
            <h2>How well do you feel supported?</h2>
            <input 
                type="number"
                min="0"
                max="5"
                placeholder="Support?"
                value={support}
                onChange={(e) => setSupport(e.target.value)}/>
            <button onClick={setSupportReducer}>Next</button>
        </div>

    )
}

export default Support;