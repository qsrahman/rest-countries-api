import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: 1.6rem;
  margin-top: 75px;

  @media (max-width: 1024px) {
    padding: 50px;
    margin-top: 25px;
  }

  .btn {
    background-color: ${props => props.theme.elements};
    color: ${props => props.theme.text};
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    border-radius: 5px;
    outline: none;
    border: none;
    margin: 4px;

    &:hover {
      box-shadow: 3px 1px 14px 2px ${props => props.theme.hover};
    }

    &:focus {
      outline: none;
    }
  }

  .back-btn {
    padding: 14px 35px;

    i {
      margin-right: 10px;
    }
  }

  .detail-main {
    display: flex;
    margin-top: 80px;

    @media (max-width: 1024px) {
      flex-direction: column;
    }

    .flag-detail {
      flex: 1 1 0;

      @media (max-width: 1024px) {
        width: 100%;
      }

      img {
        display: block;
        width: 87.5%;
        height: 400px;
        /* object-fit: cover; */

        @media (max-width: 1024px) {
          width: 100%;
          height: auto;
        }
      }
    }

    .detail-content {
      flex: 1 1 0;
      margin-top: 45px;

      h2 {
        margin-bottom: 35px;

        @media (max-width: 1024px) {
          margin-bottom: unset;
        }
      }

      .detail-lists {
        display: flex;

        @media (max-width: 1024px) {
          flex-direction: column;
        }

        ul {
          flex: 1;
          list-style-type: none;

          li {
            margin-bottom: 10px;

            strong {
              margin-right: 4px;
            }
          }

          @media (max-width: 1024px) {
            margin-top: 48px;
          }
        }
      }

      .detail-borders {
        display: flex;
        align-items: baseline;
        margin-top: 70px;

        @media (max-width: 1024px) {
          flex-direction: column;
        }

        div:first-of-type {
          white-space: nowrap;
        }

        .borders {
          @media (max-width: 1024px) {
            margin-top: 40px;
          }

          .border-btn {
            padding: 6px 12px;
          }
        }
      }
    }
  }
`

export default Wrapper
