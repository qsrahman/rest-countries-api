import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 266px);
  gap: 70px;
  justify-content: center;

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    gap: 70px;
  }
`

export const Country = styled.div`
  display: grid;
  grid-template-rows: 160px 180px;
  max-width: 266px;
  max-height: 340px;
  background-color: ${props => props.theme.elements};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);

  .flag {
    cursor: pointer;
    border-bottom: 1px solid ${props => props.theme.bgBody};

    img {
      width: 100%;
      height: 160px;
      display: block;
      object-fit: cover;
    }
  }

  .info {
    padding: 30px 24px 0 24px;

    h3 {
      margin-bottom: 24px;
    }

    p {
      margin-bottom: 8px;

      span {
        margin-left: 3px;
      }
    }
  }
`
