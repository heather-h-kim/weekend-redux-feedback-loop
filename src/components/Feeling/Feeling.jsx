import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Feeling () {

    const [feeling, setFeeling] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type:"ADD_FEEDBACK",
            payload:feeling
        })
        history.pushState("/understanding")
    }

    return (
        <div>
            <h1>How are you feeling today?</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="number" 
                    placeholder="Your feeling"
                    value={feeling}
                    onChange={(event) => setFeeling(event.target.value)}
                />
                <button type="submit">NEXT</button>
            </form>
        </div>
    )
}

export default Feeling;