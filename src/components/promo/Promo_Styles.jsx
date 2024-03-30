import styled from "styled-components";

export const Styled_Card = styled.div`
    width: 100%;
    border: solid blue;
`;

export const Grid = styled.div`
    padding: var(--size-4x);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(345px, 10vw));
    column-gap: var(--size-2x);
`;