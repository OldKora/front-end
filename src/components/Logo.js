import React from 'react';
import styled from 'styled-components';
import { colors } from './../theme';

const Logo = () => {
    return <Wrapper>
        <h1 className="logo">
            <span className="logo__letters-k">K</span>
            <span className="logo__letters-ora">ora</span>
            <span className="logo__letters-old">old</span>
        </h1>
    </Wrapper>
}

const Wrapper = styled.div`
    .logo > * {
        font-family: 'bauhaus_93regular';
        font-size: 2.5rem;
        color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${colors.white};
    }
    .logo {
        position: relative;
        width: fit-content;
        &__letters-k {
            font-size: 3.5rem;
        }
        &__letters-old {
            position: absolute;
            top: 10.5px;
            right: 0;
            font-size: 0.8rem;
            font-family: 'Montserrat';
            -webkit-text-stroke-width: 0;
            background-color:${colors.white};
            padding: 0.5px 17px;
            color: ${colors.black}
        }
    }
`

export default Logo;