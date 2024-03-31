import styled from "styled-components";

export const Styled_Card = styled.div`
    text-align: center;
    padding-bottom: var(--size-3x);
    background-color: white;
    display: grid;
    justify-items: center;
    grid-template-rows: subgrid;
    grid-row: span 3;
    border-radius: var(--size-2x);

        img {
            width: 100%;
        }

        h3 {
            padding-inline: var(--size-2x);
        }

        button {
            cursor: pointer;
            font-size: clamp(0.8rem, 2vw + 0.5rem, 1.3rem);
            padding-block: 0.5em;
            padding-inline: 1.5em;
            border-radius: var(--default-size);
            border: none;
            background-color: var(--btn-color);

                &:hover,
                &:focus-visible {
                    background-color: var(--main-color);
                }

                &:active {
                    background-color: var(--second-color);
                }
        }
`;

export const Promo_Section = styled.section`
    padding: var(--size-4x);
    background-color: var(--second-color);
`;

export const H2 = styled.h2`
    font-size: clamp(1rem, 3vw + 0.5rem, 1.8rem);
    text-align: center;
    margin-bottom: var(--size-4x);
`;

export const Grid = styled.div`
    display: grid;
    justify-content: space-evenly;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(30%, 300px));
    grid-template-rows: min-content auto auto;
    gap: var(--size-2x);
`;