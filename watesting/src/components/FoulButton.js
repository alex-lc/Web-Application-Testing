import React from 'react';

export default function FoulButton(props) {

    const { addFoul } = props;

    return (
        <button onClick={addFoul}>Foul</button>
    )
}