import * as Styles from './styles'

export const Avatar = (props) => {
  return (
    <Styles.Wrapper size={props.size}>
      <Styles.Image src={props.imageSrc} />
    </Styles.Wrapper>
  );
};
