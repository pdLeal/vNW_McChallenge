import styled from 'styled-components';

export const Styled_Hero = styled.section`
    padding: var(--size-4x);
    background-color: var(--main-color);

        .gap {
            margin-bottom: 48px;
        }

        .fig-gap {
            column-gap: 10vw;
        }
`;

export const Container = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--size-4x);

`;

export const Figure = styled.figure`
    width: 50%;
    max-width: 320px;
    display: flex;
    align-items: center;
    overflow: hidden;

        .hero-img {
            width: 100%;
            aspect-ratio: 1 / 1;
            flex-shrink: 0;
            flex-grow: 0;
            transition: ${window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'none' : 'translate 300ms ease-in-out'};
        }
`;

export const H1 = styled.h1`
    font-size: clamp(1rem, 3vw + 0.5rem, 2.5rem);
    max-width: 375px;
        
        span {
            color: #DB0007;
        }
`;

export const Img = styled.img`
    width: 8vw;
    max-width: 60px;
    cursor: pointer;

        &:hover,
        &:focus-visible {
            scale: 1.2;
        }

        &:active {
            scale: 1.1;
        }
`;