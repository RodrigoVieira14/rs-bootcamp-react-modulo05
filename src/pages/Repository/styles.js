import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight:bold;
  display:flex;
  justify-content:center;
  align-items:center;
  height: 100vh;
`;

export const Owner = styled.header`
  display:flex;
  flex-direction:column;
  align-items:center;

  a{
    border: 1px solid #7159c1;
    text-transform: uppercase;
    font-size: 12px;
    color: #7159c1;
    text-decoration: none;
    padding: 4px 5px;
    border-radius: 5px;


    &:hover{
      background: #7159c1;
      color: #fff;
    }
  }

  img{
    width: 120px;
    border-radius:50%;
    margin-top:20px;
  }

  h1{
    font-size:24px;
    margin-top:10px;
  }

  p{
    margin-top:5px;
    font-size:14px;
    color:#666;
    line-height:1.4;
    text-align:center;
    max-width:400px;
  }
`;

export const IssueFilter = styled.div`
  display:flex;
  flex-direction:row;
  margin-top:30px;
  justify-content: center;
  align-items: center;
  background:#eee;
  padding: 15px 0;

  p{
    color: #555;
    font-weight:600;
  }

  button{
    text-transform:uppercase;
    font-size:12px;
    border-radius:5px;
    border: 1px solid #7159c1;
    padding:4px 5px;
    margin:0 10px;
    list-style:none;
    color: #7159c1;
    cursor:pointer;
    background-color:transparent
    
    &:hover{
      background: #7159c1;
      color: #fff;
    }
  }

  button.active{
    background: #7159c1;
      color: #fff;
  }
`;

export const IssueList = styled.ul`
  padding-top:30px;
  border-top: 1px solid #eee;
  list-style: none;

  li{
    display:flex;
    padding: 15px 10px;
    border:1px solid #eee;
    border-radius:4px;
  }

  li + li{
    margin-top: 10px;
  }

  img{
    width:36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #eee;
  }

  div{
    flex: 1;
    margin-left:15px;

    strong{
      font-size:16px;

      a{
        text-decoration:none;
        color:#333;
        
        &:hover{
          color: #7159c1;
        }
      }

      span{
        background: #eee;
        color: #333;
        border-radius:2px;
        font-size:12px;
        font-weight:600;
        height:20px;
        padding: 3px 4px;
        margin-left:10px;
      }

    }

    p{
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;


export const PageActions = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  button {
    transition: opacity 0.25s ease-out;
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    background: #7159c1;
    color: #fff;
    
    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;