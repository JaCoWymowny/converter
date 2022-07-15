import styled from "styled-components";

export const BackgroundContainerWrapper = styled.div`
  z-index: -1;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 2em 3em;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  
  @media (max-width: 915px) {
    min-width: 900px;
    width: 900px;
  }
  
  &::before {
    z-index: -10;
    content: "";
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height: 43%;
    background: transparent linear-gradient(270deg, #373B44 0%, #73B7C8 100%) 0 0 no-repeat padding-box;
    opacity: 0.27;
    
    @media (max-width: 915px) {
      min-width: 900px;
      width: 900px;
    }
  }
  &:after {
    z-index: -9;
    content: "";
    position: absolute;
    bottom:0;
    left:0;
    width:100%;
    height: 57%;
    background:  transparent linear-gradient(180deg, #E0E5EC 0%, #C2CBD9 100%) 0 0 no-repeat padding-box;
    opacity: 0.63;
    @media (max-width: 915px) {
      min-width: 900px;
      width: 900px;
    }
  }
  color: #ebf2f8;
`;

export const ContainerWrapper = styled.div`
  width: 70%;
  max-width: 1200px;
  height: 73vh;
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
    min-width: 1100px;
  }

  @media (max-width: 1100px) {
    min-width: 900px;
  }

  @media (max-width: 915px) {
    max-width: 700px;
  }
`;

export const FirstLinkContainerWrapper = styled.div`
  width: 70%;
  max-width: 1200px;
  height: 40vh;
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
    min-width: 1100px;
  }
  
  @media (max-width: 1100px) {
    min-width: 900px;
  }
  
  @media (max-width: 915px) {
    max-width: 700px;
  }
`;




