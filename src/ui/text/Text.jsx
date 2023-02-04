import * as Styled from './styles';


export const Text = (props) => {
  return <Styled.TextWrapper {...props}>{props.children}</Styled.TextWrapper>;
};