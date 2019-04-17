import React from "react";
import styled from 'styled-components';

const Title = styled.h1`
  margin-top: 0;
  color: white;
  font-family: sans-serif;

  img{
    height: 60px;
    margin-bottom: 0
  }
  .left{
    margin-right: 20px;
  }
  .right{
    margin-left: 20px;
  }

  @media(max-width: 500px){
    font-size: 18px;

    img{
      max-height: 40px;
    }
  }
`;

const Header = () => (
  <>
  <header
    style={{
      background: `#2c3965`,
      textAlign: `center`,
      height: '90px',
      width: '100%',
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Title>
        <img src="../static/icon.png" style={{height: '60px'}} className="left" alt="Basketball" />
          Basketball NoStarz 
        <img src="../static/icon.png" style={{ height: '60px' }} className="right" alt="Basketball" />
      </Title>
    </div>
  </header>
  </>
);

export default Header;