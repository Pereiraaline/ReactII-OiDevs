import styled from 'styled-components';

export const Wrapper = styled.div((props) => {
    return{
        overflow: 'hidden',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        ...(props.size === 'small' ? smallSize : defaultSize),
    };
});

export const Image = styled.img``;

const defaultSize = {
    width: '150px',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
};

const smallSize = {
  width: "80px",
  height: "80px",
  display: "flex",
  justifyContent: "center",
};