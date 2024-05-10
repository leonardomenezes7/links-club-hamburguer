import styled from "styled-components";
import background from "../../assets/bgclub.svg"
import backgroundmobile from "../../assets/bgmobile.svg"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${background}) no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    background: url(${backgroundmobile}) no-repeat center;
  }

  > img {
    width: 370px;
    height: 370px;

    @media (max-width: 1024px) {
     margin-top: -60px;
    }
  }
`

export const Links = styled.main`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: auto;
  padding: 20px;

  @media (max-width: 1024px) {
    margin-top: -90px;
  }
 `

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  > a {
    color: ${({ theme }) => theme.colors.white};
    margin-top: 40px;
  }

  > div {
    display: flex;
   
    gap: 24px;
    font-size: 32px;
    
    a {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`