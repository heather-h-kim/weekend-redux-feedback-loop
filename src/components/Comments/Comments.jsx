import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Comments () {

    const [comments, setComments] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type:"ADD_COMMENTS",
            payload:comments
        })
        history.push("/review")
    }

    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Your comments"
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}
                />
                <button type="submit">NEXT</button>
            </form>
        </div>
    )
}

export default Comments;