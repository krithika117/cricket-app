import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CricketScoreComponent = () => {
    const [score,
        setScore] = useState(0);
    const [wickets,
        setWickets] = useState(0);
    const [overs,
        setOvers] = useState(0);
    const [balls,
        setBalls] = useState(0);
    const maxOvers = 5;

    const handleRunButtonClick = (runs) => {
        if (overs < maxOvers) {
            setScore(score + runs);
            setBalls(balls + 1);
            handleOverChange();
        }
    };

    const handleWicketButtonClick = () => {
        if (overs < maxOvers) {
            setWickets(wickets + 1);
            setBalls(balls + 1);
            handleOverChange();
        }
    };

    const handleDotBallButtonClick = () => {
        if (overs < maxOvers) {
            setBalls(balls + 1);
            handleOverChange();
        }
    };

    const handleOverChange = () => {
        if (overs < maxOvers) {
            if (balls === 5) {
                setOvers(overs + 1);
                setBalls(0);
            }
        }
    };

    const handleNoBallButtonClick = () => {
        if (overs < maxOvers) {
            setScore(score + 1);
        }
    };

    const handleWideButtonClick = () => {
        if (overs < maxOvers) {
            setScore(score + 1);
            setBalls(balls + 1);
            handleOverChange();
        }
    };

    const handleExtrasButtonClick = (runs) => {
        if (overs < maxOvers) {
            setScore(score + runs);
        }
    };

    return (
        <div>
            <div className='card p-5 bg-secondary text-white m-1'>
                {/* <h3>Cricket Score</h3> */}
                <h2 className='fw-light'>{score} - {wickets} of {overs}.{balls} overs</h2>
            </div>
            <div className='btn-group m-1'>
                <button
                    className='btn btn-secondary'
                    onClick={() => handleRunButtonClick(0)}
                    disabled={overs >= maxOvers}>0</button>
                <button
                    className='btn btn-secondary'
                    onClick={() => handleRunButtonClick(1)}
                    disabled={overs >= maxOvers}>1</button>
                <button
                    className='btn btn-secondary'
                    onClick={() => handleRunButtonClick(2)}
                    disabled={overs >= maxOvers}>2</button>
                <button
                    className='btn btn-secondary'
                    onClick={() => handleRunButtonClick(3)}
                    disabled={overs >= maxOvers}>3</button>
                <button
                    className='btn btn-secondary'
                    onClick={() => handleRunButtonClick(4)}
                    disabled={overs >= maxOvers}>4</button>
                <button
                    className='btn btn-secondary'
                    onClick={() => handleRunButtonClick(5)}
                    disabled={overs >= maxOvers}>5</button>
                <button
                    className='btn btn-secondary'
                    onClick={() => handleRunButtonClick(6)}
                    disabled={overs >= maxOvers}>6</button>
            </div>
            <div className='btn-group m-1'>
                <button
                    className='btn btn-secondary'
                    onClick={handleWicketButtonClick}
                    disabled={overs >= maxOvers}>Wicket</button>
                <button
                    className='btn btn-secondary'
                    onClick={handleDotBallButtonClick}
                    disabled={overs >= maxOvers}>Dot Ball</button>
                <button
                    className='btn btn-secondary'
                    onClick={handleNoBallButtonClick}
                    disabled={overs >= maxOvers}>No Ball</button>
                <button
                    className='btn btn-secondary'
                    onClick={handleWideButtonClick}
                    disabled={overs >= maxOvers}>Wide</button>
                <button
                    className='btn btn-secondary'
                    onClick={() => handleExtrasButtonClick(1)}
                    disabled={overs >= maxOvers}>Extras</button>
            </div>
        </div>
    );
};

export default CricketScoreComponent;
