import { Text } from "../text";
import * as Styles from "./styles";

export const Button = (props) => {
  return (
    <Styles.Wrapper>
      <Text>{props.children}</Text>
    </Styles.Wrapper>
  );
};
