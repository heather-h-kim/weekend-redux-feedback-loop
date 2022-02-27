import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SubmissionSuccess() {
    const feedback = useSelector(store => store.feedbackInfo);
    const dispatch = useDispatch();
    const history = useHistory();

    console.log('feedback is', feedback);
    const newFeedback = () => {
        console.log('submit button clicked');
        dispatch({
            type: 'RESET'
        });
        history.push('/')
    }

    return (
        <div>
            <h1>Thank you!</h1>
            <button onClick={newFeedback}>Leave New Feedback</button>
        </div>
    )
}

export default SubmissionSuccess;