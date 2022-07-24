import styled from "styled-components";

export const BackgroundContainerWrapper = styled.div`
  z-index: -1;
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};

  &::before {
    z-index: -10;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 43%;
    background: linear-gradient(270deg, #373b44, #73b7c8) 0 0 no-repeat padding-box;
    opacity: 27%;
  }

  &:after {
    z-index: -9;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 57%;
    background: transparent linear-gradient(180deg, #E0E5EC 0%, #C2CBD9 100%) 0 0 no-repeat padding-box;
    opacity: 63%;
`;

export const FirstRouteWrapper = styled.div`
  width: 1200px;
  height: 473px;
  color: ${(props) => props.theme.colors.primary};
  margin-top: 110px;
  
  @media (max-width: 1300px) {
    width: 900px;
    height: 400px;
  }
  
  @media (max-width: 920px) {
    width: 700px;
    height: 400px;
  }
`;

export const HistoryRouterWrapper = styled.div`
  width: 1200px;
  height: 800px;
  margin-top: 110px;
  background: transparent linear-gradient(180deg, #f3ffff 0%, #FFFFFF 100%) 0 0 no-repeat padding-box;
  border-radius: 33px;
  opacity: 1;
  backdrop-filter: blur(36px);
  -webkit-backdrop-filter: blur(36px);
  
  @media (max-width: 1300px) {
    width: 900px;
    height: 700px;
  }
  
  @media (max-width: 920px) {
    width: 700px;
    height: 660px;
  }
`;
