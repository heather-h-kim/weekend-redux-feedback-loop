import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Feeling () {

    const [feeling, setFeeling] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(feeling === ''){
            alert('Please indicate the level of your feeling');
        } else{
            dispatch({
                type:"ADD_FEELING",
                payload:feeling
            })
            history.push("/understanding");
        }          
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