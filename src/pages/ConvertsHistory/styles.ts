import styled from "styled-components";
import close from "../../images/close.svg";
import rightArrow from "../../images/right-arrow.svg";

export const Container = styled.div`
  max-width: 1200px;
  color: black;
  display: flex;
  justify-content: center;
  padding: 2em 3em;
  background: white;
  border-bottom-left-radius: 33px;
  border-bottom-right-radius: 33px;
  
  @media (min-width: 1900px) {
    border-radius: unset;
  }
  @media (max-width: 915px) {
    min-width: 900px;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  
  table {
    display: block;
    width: calc(100% - 18px);
    border-collapse: collapse;
    color: ${(props) => props.theme.colors.primary};
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
    //width: 270px;
    width: 23%;
    text-align: left;
  }

  .second-thead-cell {
    //width: 280px;
    text-align: left;
    width: 17%;
  }

  .third-thead-cell {
    //width: 350px;
    width: 26%;
    text-align: right;
  }
  
  .fourth-thead-cell {
    //width: 200px;
    width: 23%;
  }
  
  .fifth-thead-cell {
    //width: 150px;
    width: 18%;
    text-align: right;
    padding-right: 16px;
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
    //width: 200px;
    width: 22%;
    text-align: left;
    padding-left: 40px;
  }

  .second-tbody-cell {
    text-align: left;
    //width: 250px;
    width: 22%;
    padding-left: 30px;
  }
  
  .third-tbody-cell {
    //width: 300px;
    width: 26%;
    text-align: right;
  }
  
  .fourth-tbody-cell {
    //width: 120px;
    width: 22%;
    text-align: right;
    padding-left: 120px;

    @media (max-width: 1100px) {
      padding-left: 70px;
    }
  }
  
  .fifth-tbody-cell {
    //width: 210px;
    width: 20%;
    text-align: right;
    padding-right: 16px;
    font-weight: 600;
    font-size: 16px;
  }
  
  @media (max-width: 1000px) {
    max-width: 800px;
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
  width: 24px;
  height: 24px;
  background-image: url(${rightArrow});
  background-repeat: no-repeat;
  background-size: 100%;
  top: 50%;
  bottom: 50%;
  margin: auto 0;
`;
