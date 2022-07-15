import styled from "styled-components";

export const Title = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: 35px;
  max-width: 1200px;
  
  @media (max-width: 1325px) {
    font-size: 28px;
    margin-bottom: 15px;
  }
  
  @media (max-width: 915px) {
    font-size: 22px;
    margin-bottom: 12px;
    max-width: 900px;
  }
  @media (max-width: 768px) {
    margin-bottom: 0;
    max-width: 450px;
  }
`;

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
  width: 90%;
  margin: 10px 50px;
  @media (max-width: 768px) {
    max-width: 230px;
  }
`;
