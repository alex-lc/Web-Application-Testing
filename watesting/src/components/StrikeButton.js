import React from 'react';

export default function StrikeButton(props) {

    const { addStrike } = props;

    return (
        <button data-testid="btnStrike" onClick={addStrike}>Strike</button>
    )
}