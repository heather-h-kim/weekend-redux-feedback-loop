import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Supported () {

    const [supported, setSupported] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(supported === ''){
            alert('Please indicate how well you are being supported')
        } else{
            dispatch({
                type:"ADD_SUPPORTED",
                payload:supported
            })
            history.push("/comments")
        }
    }

    return (
        <div>
            <h1>How well are you being supported?</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="number" 
                    placeholder="support"
                    value={supported}
                    onChange={(event) => setSupported(event.target.value)}
                />
                <button type="submit">NEXT</button>
            </form>
        </div>
    )
}

export default Supported;