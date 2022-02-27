import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Review () {
    const feedback = useSelector(store => store.feedbackInfo);
    const dispatch = useDispatch();
    const history = useHistory();

    console.log('feedback is', feedback);
    const submitFeedback = () => {
        console.log('submit button clicked');

        axios.post('/feedback', feedback)
        .then((response) => {
            console.log('Posted the feedback', response);
            dispatch({
                type:'RESET'
            });
            history.push('/')
        }).catch((error) => {
            console.log('error POSTing the feedback', error);
        })
    }
    return (
        <div>
            <h1>Review Your Feedback</h1>
            <p>Feeling: {feedback.feeling}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Supoort: {feedback.support}</p>
            <p>Comments: {feedback.comments}</p>
            <button onClick={submitFeedback}>Submit</button>
        </div>
    )
}

export default Review;