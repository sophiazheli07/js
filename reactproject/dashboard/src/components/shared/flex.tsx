import styled from "styled-components";

interface FlexPropsInterface {
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    justifyContent?: string;
    alignItems?: string;
    background?: string;


}

export const Flex = styled.div<FlexPropsInterface>`
    display: flex;

    width: ${(props) => props.width || "auto"};
    height: ${(props) => props.height || "auto"};
    margin: ${(props) => props.margin || "0"};
    padding: ${(props) => props.padding || "0"};
    justify-content: ${(props) => props.justifyContent || "start"};
    align-items: ${(props) => props.alignItems || "start"};
    background: ${(props) => props.background || "none"};

`
export const FlexRow = styled(Flex)`
    flex-direction: row;
`

export const FlexColumn =  styled(Flex)`
    flex-direction: column;

    

    & > .wrapper {
        width: 20px;
        height: 20px;
        background: red;
    }
`

