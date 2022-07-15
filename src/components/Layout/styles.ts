import styled from "styled-components";

export const BackgroundContainerWrapper = styled.div`
  z-index: -1;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  
  @media (max-width: 915px) {
    max-width: 900px;
    min-height: 75vh;
  }
  
  @media (max-width: 768px) {
    max-width: 460px;
    min-height: 75vh;
    align-items: center;
  }
  
  &::before {
    z-index: -10;
    content: "";
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 43%;
    background: transparent linear-gradient(270deg, #373B44 0%, #73B7C8 100%) 0 0 no-repeat padding-box;
    opacity: 0.27;
    
    @media (max-width: 915px) {
      max-width: 900px;
      width: 900px;
    }
    @media (max-width: 768px) {
      max-width: 460px;
    }
  }
  &:after {
    z-index: -9;
    content: "";
    position: absolute;
    bottom:0;
    left:0;
    width:100%;
    height: 100%;
    background:  transparent linear-gradient(180deg, #E0E5EC 0%, #C2CBD9 100%) 0 0 no-repeat padding-box;
    opacity: 0.63;
    @media (max-width: 915px) {
      max-width: 900px;
      width: 900px;
    }
    @media (max-width: 768px) {
      max-width: 460px;
    }
  }
`;

export const ContainerWrapper = styled.div`
  width: 70%;
  max-width: 1200px;
  height: 75vh;
  margin-top: 7%;
  background: transparent linear-gradient(180deg, #f3ffff 0%, #FFFFFF 100%) 0 0 no-repeat padding-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #FFFFFF;
  border-radius: 33px;
  opacity: 1;
  backdrop-filter: blur(36px);
  -webkit-backdrop-filter: blur(36px);

  @media (max-width: 1600px) {
    width: 1100px;
  }

  @media (max-width: 1100px) {
    max-width: 800px;
  }

  @media (max-width: 915px) {
    max-width: 700px;
  }
  @media (max-width: 768px) {
    min-width: 200px;
    max-width: 300px;
    width: 300px;
    height: 95vh;
  }
`;

export const FirstLinkContainerWrapper = styled.div`
  width: 70%;
  max-width: 1200px;
  height: 53vh;
  margin-top: 7%;
  background: transparent linear-gradient(180deg, #f3ffff 0%, #FFFFFF 100%) 0 0 no-repeat padding-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #FFFFFF;
  border-radius: 33px;
  opacity: 1;
  backdrop-filter: blur(36px);
  -webkit-backdrop-filter: blur(36px);
  
  @media (max-width: 1600px) {
    max-width: 1200px;
  }
  
  @media (max-width: 1100px) {
    max-width: 1000px;
    width: 800px;
  }
  
  @media (max-width: 915px) {
    max-width: 700px;
  }
  @media (max-width: 768px) {
    min-width: 200px;
    max-width: 300px;
    width: 300px;
    height: 60vh;
  }
`;




