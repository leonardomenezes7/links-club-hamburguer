import { Container, Links, Footer } from "./styles";
import { Link } from "../../components/Link";
import { FaInstagram } from "react-icons/fa";
import { SiIfood } from "react-icons/si";
import logo from "../../assets/logoclub.png"

export function Home() {
  return(
    <Container>
      <img src={logo} alt="Logo do Clube"/>

      <Links>
        <Link 
          title="iFood"
          href="https://www.ifood.com.br/delivery/cuiaba-mt/clube-do-hamburguer-santa-cruz/96404ac5-f3fa-4450-b8fc-9650a81bf0cb?utm_medium=share"
          target="blank"
        />

        <Link 
          title="Em Breve!!!"
          href="https://drive.google.com/file/d/1fuypaohYITGLabV9kNrCJW1xc9KhUi99/view?usp=drivesdk"
          target="blank"
        />

        <Link 
          title="Confira o processo de preparação do hambúrguer!"
          href="https://www.instagram.com/reel/C6g9GGPuvwn/?igsh=dXIydnY5bmx2dnRl"
          target="blank"  
        />
      </Links>

      <Footer>
        <div>
          <a href="https://www.instagram.com/clube.do.hamburguer/" target="blank">
            <FaInstagram />
          </a>

          <a 
            href="https://www.ifood.com.br/delivery/cuiaba-mt/clube-do-hamburguer-santa-cruz/96404ac5-f3fa-4450-b8fc-9650a81bf0cb"
            target="blank"
          >
            <SiIfood />
          </a>
        </div>

        <a href="https://www.tisimples.com/" target="blank">Feito por TiSimples</a>
      </Footer>
    </Container>
  )
}