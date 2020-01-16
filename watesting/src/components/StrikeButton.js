import React from 'react';

export default function StrikeButton(props) {

    const { addStrike } = props;

    return (
        <button onClick={addStrike}>Strike</button>
    )
}