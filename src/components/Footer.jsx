import React from 'react';
import styled from 'styled-components';
import Logo from '../imgs/logo.png';
import GPlay from '../imgs/gPlay.png';
import AppStore from '../imgs/app_store.png';

const Footer_Styled = styled.footer`
    padding: var(--size-3x);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    row-gap: var(--size-3x);
    column-gap: var(--size-2x);

        .pays {
            width: clamp(5rem, 5vw + 0.5rem, 8rem);
        }

        .logo {
            width: clamp(3rem, 3vw + 0.5rem, 5rem);
        }

        @media only screen and (max-width: 445px) {
            justify-content: center;
        }
    `;

const Flex = styled.div`
    display: flex;
    align-items: center;
    column-gap: var(--size-2x);

        /* & :first-child {
            margin-right: var(--size-2x);
        } */
`;

function Footer() {
  return (
    <Footer_Styled>
        <Flex>
            <img className='logo' src={Logo} alt="" />
            <p>© McDonald’s 2024</p>
        </Flex>
        <Flex>
            <img className='pays' src={GPlay} alt="" />
            <img className='pays' src={AppStore} alt="" />
        </Flex>
    </Footer_Styled>
  )
}

export default Footer