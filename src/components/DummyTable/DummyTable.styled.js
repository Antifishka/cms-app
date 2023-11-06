import styled from "styled-components";
import { theme } from "../../globalStyles/theme";

export const Table = styled.table`
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;

    color: ${theme.colors.table};
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadows.table};
    border-radius: ${theme.radii.button};
    border-collapse: collapse;
`;
export const Head = styled.th`
    padding: 6px;
    width: 180px;

    text-transform: uppercase;

    color: ${theme.colors.mainText};
    background-color: ${theme.colors.secondaryText};
`;

export const Line = styled.tr`
    &:nth-child(2n){
        background-color: ${theme.colors.tableBackground};
    }
`;

export const Cell = styled.td`
    padding: 6px;
    width: 150px;
    border: ${theme.borders.table};

    text-align: center;
`;