import styled from "styled-components";

export const Title = styled.div`
  text-align: center;
  margin-bottom: 50px;
  font-size: 35px;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
  width: 90%;
  margin: 65px 50px;
`;
