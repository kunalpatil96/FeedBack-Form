import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext';


function FeedbackStats() {

    // calculate rating avg
    const { feedback,isLoading } = useContext(FeedbackContext)

    let average =
    feedback.reduce((acc, cur) => {
        return acc + cur.rating;
    }, 0) / feedback.length;
    average = average.toFixed(1).replace(/[.,]0$/, '');
    // console.log(average);

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Review </h4>
            <h4>avrge rating 10</h4>
            <h4>Average rating: {isNaN(average) ? 0 : average} </h4>
        </div>
    );
}

export default FeedbackStats;