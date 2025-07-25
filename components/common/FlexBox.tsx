import { Box } from "@mui/material";
import styled from "styled-components";

interface FlexProps {
  column?: string;
  justify?: string;
  align?: string;
  height?: string;
}

const FlexBox = styled(Box)<FlexProps>`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "center"};
  height: ${(props) => `${props.height}vh` || "0px"};
`;
export default FlexBox;
