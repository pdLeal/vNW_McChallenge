import React from 'react';
import styled from 'styled-components';
import Logo from '../imgs/logo.png';
import Cel1 from '../imgs/app.png';
import Cel2 from '../imgs/app2.png';

const Styled_Header = styled.header`
  padding: var(--size-2x) var(--size-4x);
  display: flex;
  justify-content:space-between;
  align-items: center;
  gap: var(--size-2x);
      `;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: var(--small-size);
  column-gap: var(--size-4x);

    & > * {
      padding-block: 0.1em;
      padding-inline: var(--size-2x);
      border-radius: var(--default-size);
      }

    @media only screen and (max-width: 515px) {
      max-width: 200px;
    }
`;

const Link = styled.a`
  text-decoration: none;
  font-size: clamp(0.8rem, 2vw + 0.5rem, 1.3rem);
  color: black;
  display: flex;
  align-items: center;

    & :first-child { // Selects the first child of each link
      margin-right: var(--default-size);
    }

    &:nth-child(1) {
        &:hover {
          background-color: #fff0c8;
        }

        &:active {
          font-weight: bold;
        }
    }

    &:nth-child(2) { // Selects the link that's a second child
      font-weight: bold;
      background-color: var(--main-color);

        &:hover {
          background-color: var(--second-color);
        }

        &:active {
          background-color: #a27700;
        }
    }
    
    img {
      width: clamp(20px, 2vw + 1rem, 30px);
    }
`;


function Header() {
  return (
    <Styled_Header>
      <a href='#'><img src={Logo} alt="Logo do Mc Donalds" /></a>
      <Div>
        <Link href='#'>
          <img src={Cel1} alt="Icone de celular minimalista" />
          <p>Baixe o App</p>
        </Link>
        <Link href='#'>
          <p>Peça seu Méqui</p>
          <img src={Cel2} alt="Celular com um saco de lanches do Mc Donalds na tela" />
        </Link>
      </Div>
    </Styled_Header>
  )
}

export default Header