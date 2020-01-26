import React from 'react';
import styled from 'styled-components';

// components
import StrikeButton from './StrikeButton';
import BallButton from './BallButton';
import FoulButton from './FoulButton';
import HitButton from './HitButton';

const Controls = styled.div`
    display: flex;
    flex-direction: row;
    width: 65%;
    justify-content: space-evenly;
`;

export default function Dashboard(props) {

    const { strikes, setStrikes, balls, setBalls, fouls, setFouls, atBat, setAtBat, hit, setHit } = props;

    const addStrike = (e) => {
        e.preventDefault();
        if (strikes < 3) {
            setStrikes(strikes + 1);
        }
    }

    const addFoul = (e) => {
        e.preventDefault();
        if (fouls < 2) {
            setFouls(fouls + 1);
            setStrikes(strikes + 1);
        }
        else {
            return null;
        }
    }

    const addBall = (e) => {
        e.preventDefault();
        if (strikes < 3) {
            setBalls(balls + 1);
        }
    }

    const addHit = (e) => {
        e.preventDefault();
        console.log(`You hit it!`);
        setStrikes(0);
        setBalls(0);
        setFouls(0);
        setAtBat(atBat + 1);
    }

    if (strikes === 3) {
        console.log(`You struck out! Next at bat.`);
        setStrikes(0);
        setFouls(0);
        setBalls(0);
        setAtBat(atBat + 1);

    }

    if (atBat === 3) {
        console.log(`Opposite team bats now.`)
        setAtBat(0);
    }

    if (balls === 4) {
        console.log(`Batter walks.`);
        setStrikes(0);
        setBalls(0);
        setAtBat(atBat + 1);
    }

    return (
        <Controls>
            <StrikeButton addStrike={addStrike} />
            <BallButton addBall={addBall} />
            <FoulButton addFoul={addFoul} />
            <HitButton addHit={addHit} />
        </Controls>
    )
}