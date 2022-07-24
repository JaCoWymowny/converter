import styled from "styled-components";
import close from "../../images/close.svg";
import rightArrow from "../../images/right-arrow.svg";

export const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: center;

  //@media (max-width: 920px) {
  //  padding-left: 10px;
  //}
`;

export const TableWrapper = styled.div`
  width: 100%;
  background-color: white;
  padding-left: 10px;
  
  @media (max-width: 1300px) {
    width: 89%;
  }
  
  @media (max-width: 920px) {
    width: 95%;
    padding-left: 18px;
  }
  
  @media (max-width: 768px) {
    width: 250px;
  }
  
  table {
    font-size: 16px;
    display: block;
    width: calc(100% - 18px);
    border-collapse: collapse;
    color: ${(props) => props.theme.colors.primary};
    
    @media (max-width: 1300px) {
      font-size: 12px;
    }
  }

  thead tr {
    position: relative;
  }
  
  thead tr:before {
    content : "";
    position: absolute;
    left    : 0;
    bottom  : 0;
    width   : 98%;
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
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
  
  .thead-cell {
    padding-bottom: 10px;
  }
    
  .first-thead-cell {
    padding-left: 15px;
    width: 230px;
    text-align: left;

    @media (max-width: 1300px) {
      width: 232px;
    }
    
    @media (max-width: 920px) {
      width: 150px;
    }
  }

  .second-thead-cell {
    text-align: left;
    width: 219px;
    
    @media (max-width: 1300px) {
      width: 130px;
    }
    
    @media (max-width: 920px) {
      width: 133px;
    }

    @media (max-width: 768px) {
      text-align: right;
    }
  }

  .third-thead-cell {
    width: 265px;
    text-align: right;

    @media (max-width: 1300px) {
      width: 183px;
    }
    
    @media (max-width: 920px) {
      width: 111px;
    }
    
    @media (max-width: 768px) {
      margin-left: 15px;
    }
  }
  
  .fourth-thead-cell {
    width: 205px;

    @media (max-width: 1300px) {
      width: 177px;
    }
    
    @media (max-width: 920px) {
      
    }
    
    @media (max-width: 768px) {
      width: 13%;
    }
  }
  
  .fifth-thead-cell {
    width: 135px;
    text-align: right;
    padding-right: 22px;
    
    @media (max-width: 1300px) {
      width: 106px;
      padding-right: 12px;
    }
    
    @media (max-width: 920px) {
      width: 125px;
    }

    @media (max-width: 768px) {
      
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
    width: 180px;
    text-align: left;
    padding-left: 40px;

    @media (max-width: 1300px) {
      width: 182px;
    }
    
    @media (max-width: 920px) {
      width: 75px;
      padding-left: 0;
    }
    
    @media (max-width: 768px) {
      padding-left: 0;
      width: 18%;
      margin-right: 40px;
    }
  }

  .second-tbody-cell {
    text-align: left;
    width: 268px;
    padding-left: 30px;

    @media (max-width: 1300px) {
      width: 185px;
    }
    
    @media (max-width: 920px) {
      width: 75px;
      padding-left: 5px;
      text-align: right;
    }

    @media (max-width: 768px) {
      padding-left: 0;
      padding-right:3px;
      width: 20%;
    }
  }
  
  .third-tbody-cell {
    width: 250px;
    text-align: right;

    @media (max-width: 1300px) {
      width: 145px;
    }
    
    @media (max-width: 920px) {
      width: 160px;
    }
    
    @media (max-width: 768px) {
      width: 18%;
    }
  }
  
  .fourth-tbody-cell {
    width: 100px;
    text-align: right;

    @media (max-width: 1300px) {
      width: 80px;
    }
    
    @media (max-width: 920px) {
      width: 70px;
    }
    
    @media (max-width: 768px) {
      padding-left: 10px;
      width: 15%;
    }
  }
  
  .fifth-tbody-cell {
    width: 240px;
    text-align: right;
    padding-right: 22px;
    font-weight: 600;

    @media (max-width: 1300px) {
      width: 193px;
      padding-right: 23px;
    }
    
    @media (max-width: 920px) {
      width: 200px;
      padding-right: 12px;
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
  right: 22%;
  
  @media (max-width: 1300px) {
    right: 25%;
  }

  @media (max-width: 920px) {
    right: 32%;
  }
`;
