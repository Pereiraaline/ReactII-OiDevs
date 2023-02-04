import styled from 'styled-components';

export const TextWrapper = styled.div`
    color: ${(props) => props.color || 'white'};
    font-weight: ${(props) => (props.bold ? '900' : '')};
`;