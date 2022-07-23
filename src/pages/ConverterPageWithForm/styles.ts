import styled from "styled-components";

export const Title = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: 35px;
  margin-top: 75px;
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  height: 473px;
  display: flex;
  padding: 0 60px;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  background: transparent linear-gradient(180deg, #f3ffff 0%, #FFFFFF 100%) 0 0 no-repeat padding-box;
  border: 3px solid #FFFFFF;
  border-radius: 33px;
  opacity: 1;
  backdrop-filter: blur(36px);
  -webkit-backdrop-filter: blur(36px);
  font-weight: 700;
`;
