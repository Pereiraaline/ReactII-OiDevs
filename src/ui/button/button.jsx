import { Text } from "../text";
import * as Styles from "./styles";

export const Button = (props) => {
  return (
    <Styles.Wrapper {...props}>
      <Text onClick={props.onClick}>{props.children}</Text>
    </Styles.Wrapper>
  );
};
