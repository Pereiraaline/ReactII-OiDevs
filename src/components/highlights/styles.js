import styled from "styled-components";
import { Text } from "../../ui/text";

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 25px 0;
`;

export const HighlighItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 110px;
`;

export const HighlightText = styled(Text)`
  margin-top: 5px;
  width: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  white-space: nowrap;
`;
