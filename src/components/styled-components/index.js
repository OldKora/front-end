import styled from 'styled-components';
import {colors} from  './../../theme';

export const Container = styled.div`
    padding: 0 1.5rem;

    @media (min-width: 650px) {
        padding: 0 3rem;
    }
    @media (min-width: 1024px) {
        padding: 0 4.5rem;
    }
`

export const Input = styled.input`
    border: 1px solid ${colors.white};
    padding: 12px 15px;
    width: 100%;
    border-radius:  25px;
    color: ${colors.white};
    
    &::placeholder {
        color: ${colors.white}
    }
    &:focus {
        box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.8)
    }
    @media (min-width: 600px) {
        padding-right: 26%;
    }
    
`

export const Button = styled.button`
    background-color: ${colors.white};
    width: 100%;
    padding: 13px 0;
    margin: 15px 0;
    border-radius: 25px;
    text-transform: uppercase;
    transition: ease .3s;
    &:hover {
        background-color: ${colors.primary};
        color: ${colors.white};
    }
    @media (min-width: 600px) {
        width: 25%;
        position: absolute;
        top: -15px;
        right: -0.5px;
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        &:hover {
            background-color: ${colors.primary};
            color: ${colors.white};
            border: 1px solid #fff;
            padding: 12px;
        }
    }
`

export const Message = styled.p`
    width: 100%;
    padding: 5px;
    font-size: 0.8rem;
    margin-bottom: 5px;
    transition: ease .5s;
    color: #fff;
    ${props => props.type === 'error' ?
    `background: rgba(207,0,15,0.5);` : 'background: rgba(0,255,0,0.3);'
    }

    @media (min-width: 1024px) {
            width: 75%;       
    }
`;