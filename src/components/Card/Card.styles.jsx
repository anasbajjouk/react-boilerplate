import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 30rem;
  border-radius: 7px;
  box-shadow: -1px 1px 10px 0.5px ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.elements};
  width: 230px;

  @media only screen and (max-width: 360px) {
    width: 360px;
  }

  & .country_image {
    height: 50%;
    width: 100%;
    position: relative; /* overflow: hidden; */
    border-radius: 7px 7px 0 0;

    & img {
      border-radius: 7px 7px 0 0;
      width: inherit;

      height: 100%;
      /* background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%; */
      object-fit: cover;
    }
  }

  & .country_info {
    padding: 20px;

    & .country_info-properties {
      font-weight: ${({ theme }) => theme.font.medium};
      & span {
        font-weight: ${({ theme }) => theme.font.regular};
      }
    }

    & .country_info-title {
      font-weight: ${({ theme }) => theme.font.bold};
      margin-bottom: 15px;
      font-size: inherit;
    }
  }
`
