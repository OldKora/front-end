import React from 'react';
import styled from 'styled-components';
import Countdown from './Countdown';
import { colors } from '../theme';
import { Input, Button } from './styled-components';

const Home = () => {
    return(
        <Wrapper>
            <h1>We are launching in</h1>
            <Countdown />
            <p className="caption">
                We are working hard on our awesome online shop.
                Please subscribe to be notify when the website will be online. <span>Thank you!</span>
            </p>
            <div className="actions">
                <Input placeholder="Your email address" />
                <Button>Notify Me</Button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding-top: 30px;
    color: ${colors.white};
    h1 {
        font-size: 1.5rem;
        font-weight: bold;
        text-transform: uppercase;
        padding: 30px  0;
        @media (min-width: 650px) {
            font-size: 2.5rem;
        }
    }
    .countdown {
        display: flex;
        justify-content: space-between;
        width: 85%;
        @media (min-width: 650px) {
            width: 60%; 
        }
        @media (min-width: 950px) {
            width: 48%;       
        }
        h2 {
            display: flex;
            flex-direction: column;
            font-size: 1.6rem;
            text-align: center;
            span {
                font-size: 0.6rem;
            }
            
        }
    }
    .caption {
        text-align: center;
        font-size: 1.2rem;
        padding: 35px 0;
        @media (min-width: 1024px) {
            width: 75%;       
        }
    }
    .actions {
        width:  100%;
        position: relative;
        @media (min-width: 1024px) {
            width: 75%;       
        }
    }
`

export default Home;