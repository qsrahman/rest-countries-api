import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${props => props.theme.elements};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    height: 80px;
    padding: 0 86px;
    margin: 0 auto;

    @media (max-width: 1024px) {
      padding: 0 80px;
    }

    @media (max-width: 540px) {
      padding: 0 22px;
    }

    h2 {
      @media (max-width: 540px) {
        font-size: 1.6rem;
      }
    }
  }
`

export const Container = styled.div`
  max-width: 1440px;
  padding: 0 80px;
  margin-left: auto;
  margin-right: auto;

  .loading {
    text-align: center;
    font-size: 4.8rem;
    margin-top: 100px;
  }

  @media (max-width: 540px) {
    padding: 0;
  }
`

export const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  margin: 45px auto;

  @media (max-width: 540px) {
    display: block;
    margin: 30px 20px;
  }
`
