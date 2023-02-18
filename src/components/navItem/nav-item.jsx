import { Text } from "../../ui/text/index";
import { Wrapper } from "./styles";

export const NavItem = (props) => {
  return (
    <Wrapper {...props}>
      <Text onClick={props.onClick}>{props.text}</Text>
    </Wrapper>
  );
};
