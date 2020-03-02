import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { Container } from './styled-components';
import { colors } from './../theme';

const AppBar = () => {
    return(
        <Wrapper>
            <Container className="tool-bar">
                <Logo />
                <div className="social-networks">
                    <a href="#" >
                        <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="#" >
                        <i className="fab fa-instagram-square"></i>
                    </a>
                    <a href="#" >
                        <i className="fab fa-twitter-square"></i>
                    </a>
                </div>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0.5rem 0;
    box-shadow: 0 0.25rem 0.125rem 0 rgba(0,0,0,0.05);
    .tool-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .social-networks {
        a {
            font-size: 2rem;
            margin-right: 10px;
            color: ${colors.primary};
            &:last-child {
                margin-right: 0;
            }
        }
    }
`

export default AppBar;

