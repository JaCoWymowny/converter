import styled from "styled-components";
import close from "../../images/close.svg";
import rightArrow from "../../images/right-arrow.svg";

export const Container = styled.div`
  max-width: 1100px;
  margin: auto;
`;

export const TableWrapper = styled.div`
  width: 100%;
  background-color: white;
  
  @media (max-width: 768px) {
    width: 250px;
  }
  
  table {
    font-size: 16px;
    display: block;
    width: calc(100% - 18px);
    border-collapse: collapse;
    color: ${(props) => props.theme.colors.primary};
    
    @media (max-width: 1100px) {
      font-size: 12px;
    }
    @media (max-width: 915px) {
      font-size: 10px;
    }
  }
  
  tbody {
    display: block;
    overflow-y: scroll;
    overflow-x: unset;
    height: 215px;
  }

  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }
  
  .row {
    position: relative;
  }

  .row::before {
    content : "";
    position: absolute;
    left    : 0;
    bottom  : 0;
    height  : 1px;
    width   : 98%;
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  }
  
  //thead cell
    
  .first-thead-cell {
    padding-left: 20px;
    width: 24%;
    text-align: left;
  }

  .second-thead-cell {
    text-align: left;
    width: 17%;

    @media (max-width: 768px) {
      text-align: right;
    }
  }

  .third-thead-cell {
    width: 25%;
    text-align: right;
    
    @media (max-width: 768px) {
      margin-left: 15px;
    }
  }
  
  .fourth-thead-cell {
    width: 22.5%;
    @media (max-width: 768px) {
      width: 13%;
    }
  }
  
  .fifth-thead-cell {
    width: 18%;
    text-align: right;
    padding-right: 20px;

    @media (max-width: 768px) {
      padding-right: 5px;
    }
  }
  // end of thead cell
  
  // tbodycell
  .tbody-cell {
    padding: 10px 0;
  }
  
  .button {
    cursor: pointer;
    font-size: 20px;
    
  }
  
  .first-tbody-cell {
    width: 22%;
    text-align: left;
    padding-left: 40px;
    
    @media (max-width: 768px) {
      padding-left: 0;
      width: 18%;
      margin-right: 40px;
    }
  }

  .second-tbody-cell {
    text-align: left;
    width: 22%;
    padding-left: 30px;

    @media (max-width: 768px) {
      padding-left: 0;
      padding-right:3px;
      width: 20%;
    }
  }
  
  .third-tbody-cell {
    width: 26%;
    text-align: right;
    
    @media (max-width: 768px) {
      width: 18%;
    }
  }
  
  .fourth-tbody-cell {
    width: 22%;
    text-align: right;

    @media (max-width: 1100px) {
      padding-left: 70px;
    }
    @media (max-width: 768px) {
      padding-left: 10px;
      width: 15%;
    }
  }
  
  .fifth-tbody-cell {
    width: 20%;
    text-align: right;
    padding-right: 16px;
    font-size: 16px;
    font-weight: 600;

    @media (max-width: 1100px) {
      font-size: 12px;
    }
    
    @media (max-width: 915px) {
      font-size: 10px;
    }
  }
`

export const Close = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${close});
  background-repeat: no-repeat;
  background-size: 100%;
  top: 50%;
  bottom: 50%;
  margin: auto 0;
`;

export const RightArrow = styled.div`
  content: "";
  position: absolute;
  width: 24px;
  height: 24px;
  background-image: url(${rightArrow});
  background-repeat: no-repeat;
  background-size: 100%;
  top: 25%;
  right: 20%;
`;
