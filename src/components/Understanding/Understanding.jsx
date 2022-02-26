import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Understanding () {

    const [understanding, setUnderstanding] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type:"ADD_UNDERSTANDING",
            payload:understanding
        })
        history.push("/supported")
    }

    return (
        <div>
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="number" 
                    placeholder="Your understanding"
                    value={understanding}
                    onChange={(event) => setUnderstanding(event.target.value)}
                />
                <button type="submit">NEXT</button>
            </form>
        </div>
    )
}

export default Understanding;