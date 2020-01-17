import React from 'react';

export default function HitButton(props) {

    const { addHit } = props;

    return (
        <button data-testid="btnHit" onClick={addHit}>Hit</button>
    )
}