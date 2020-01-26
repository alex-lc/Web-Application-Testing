import React from 'react';

export default function BallButton(props) {

    const { addBall } = props;

    return (
        <button data-testid="btnBall" onClick={addBall}>Ball</button>
    )
}