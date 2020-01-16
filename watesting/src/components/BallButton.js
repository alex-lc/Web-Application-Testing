import React from 'react';

export default function BallButton(props) {

    const { addBall } = props;

    return (
        <button onClick={addBall}>Ball</button>
    )
}