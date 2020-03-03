import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Countdown from './Countdown';
import { colors } from '../theme';
import { Input, Button, Message } from './styled-components';
import { db } from './../lib/firebase';
import * as Yup from 'yup';

const Home = () => {
    const [email, setEmail] =  useState('');
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const schema = Yup.object().shape({
        email: Yup.string()
            .trim()
            .email()
            .required()
    });

    const handleCHnage = e => {
        setEmail(e.target.value);
    }

    const onSubscribe = e => {
        e.preventDefault();
        schema.validate({email}).then(res => {
            db.collection('subscribers').add(res).then(res => {
                setSuccess(true);
                setEmail('')
            }).catch(err => setErrors({message: err.message}));
        }).catch(err => setErrors(err))
    }
    // useEffect(() => {
    //     db.collection('subscribers').get().then(querySnapshot => {
    //         querySnapshot.forEach(doc => {
    //             console.log(doc.data())
    //         })
    //     }).catch(err => console.log(err));
    // }, [])
    return(
        <Wrapper>
            <h1>We are launching in</h1>
            <Countdown />
            <p className="caption">
                We are working hard on our awesome online shop.
                Please subscribe to be notify when the website will be online. <span>Thank you!</span>
            </p>
            <div className="actions">
                {errors.message && 
                    <Message type="error">{errors.message}</Message>
                }
                {success && 
                    <Message type="success">Thank you for subscribe, we will notify you when the webiste will be online.</Message>
                }
                <Input value={email} onChange={handleCHnage} placeholder="Your email address" />
                <Button onClick={onSubscribe}>Notify Me</Button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 30px 0 88px;
    color: ${colors.white};
    @media (min-width: 375px) {
        padding: 100px 0 213px;
    }
    @media (min-width: 375px) {
        padding: 100px 0 225px;
    }
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