import React from 'react';

export default function FoulButton(props) {

    const { addFoul } = props;

    return (
        <button data-testid="btnFoul" onClick={addFoul}>Foul</button>
    )
}