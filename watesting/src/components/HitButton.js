import React from 'react';

export default function HitButton(props) {

    const { addHit } = props;

    return (
        <button onClick={addHit}>Hit</button>
    )
}