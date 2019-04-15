import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Global, css } from '@emotion/core';  
import Header from './Header';
import Meta from './Meta';


const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};

`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Global 
            styles={
              css`
                html {
                  box-sizing: border-box;
                  font-size: 10px;
                }
                *, *:before, *:after {
                  box-sizing: inherit;
                }
                body {
                  padding: 0;
                  margin: 0;
                  font-size: 1.5rem;
                  line-height: 2;
                }
              `
            }
          />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
