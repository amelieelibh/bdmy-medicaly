import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import Accessibility from "../assets/LandingPage/Accessibility.svg";
import BlockchainIllustration from "../assets/LandingPage/BlockchainIllustration.svg";
import PaperLess from "../assets/LandingPage/PaperLess.svg";
import PatientLoginIllustration from "../assets/LandingPage/PatientLoginIllustration.svg";
import AdminLoginIllustration from "../assets/LandingPage/AdminLoginIllustration.svg";
import HospitalLoginIllustration from "../assets/LandingPage/HospitalLoginIllustration.svg";
import ViewAnyRecordsIllustration from "../assets/LandingPage/ViewAnyRecordsIllustration.svg";
import {
  About,
  AppName,
  Backdrop,
  BlueLine,
  ButtonContainer,
  ButtonContainerMobile,
  Container,
  DoctorNurseIllustration,
  DoctorNurseIllustrationMobile,
  Dropdown,
  DropdownItem,
  Footer,
  GetStartedButton,
  GetStartedButtonMobile,
  Home,
  Image,
  ImageAndTextContainer,
  Login,
  LoginButton,
  LoginContainer,
  LoginFlex,
  LoginImage,
  LoginText,
  Logo,
  Menu,
  MenuContainer,
  NavbarContainer,
  Slogan,
  Slogan2,
  SpecialityText,
  SubContainer1,
  SubContainer2,
  SubContainer3,
  SubContainer4,
  SubContainer5,
  SubContainerMobile,
} from "./LandingPage.styled";
import { useAuth } from "../services/authorization";

const LandingPage = () => {
  const ref = useRef();
  const loginRef = useRef();
  const auth = useAuth();
  const history = useHistory();

  const [menu, setMenu] = useState(false);

  const scrollToLoginFlex = () => ref.current.scrollIntoView();
  const scrollToLoginFlexMobile = () => {
    setMenu(false);
    loginRef.current.scrollIntoView();
  };

  return (
    <Container>
      {menu && (
        <Backdrop
          onClick={() => {
            setMenu(false);
          }}
        />
      )}
      <NavbarContainer>
        <Logo />
        <AppName>Medicaly</AppName>
        <Home onClick={() => history.push("/home")}>
          Inicio
          <BlueLine />
        </Home>
        <About onClick={() => history.push("/about")}>Nosotros</About>
        {auth.loggedIn ? (
          <Login onClick={() => history.push("/dashboard")}>Dashboard</Login>
        ) : (
          <Login onClick={scrollToLoginFlex}>Acceder</Login>
        )}
        <MenuContainer open={menu}>
          <Menu onClick={() => setMenu(!menu)}></Menu>
          <Dropdown>
            <DropdownItem
              style={{ backgroundColor: "#DAE9FF" }}
              onClick={scrollToLoginFlexMobile}
            >
              Home
            </DropdownItem>
            <DropdownItem onClick={() => setMenu(!menu)}>Login</DropdownItem>
          </Dropdown>
        </MenuContainer>
      </NavbarContainer>
      <SubContainer1>
        <SubContainer2>
          <SubContainer3>
            <Slogan>
              Tu historial clinico y recetas medicas
              <br />
              almacenado en blockchain
            </Slogan>
            <Slogan2>
              Accede desde cualquier parte del mundo a cualquier hora. Respaldado
              <br />
              Por Blockdemy
            </Slogan2>
            <ButtonContainer>
              <GetStartedButton onClick={scrollToLoginFlex}>
                Comenzar
              </GetStartedButton>
            </ButtonContainer>
          </SubContainer3>
          <DoctorNurseIllustration />
          <SubContainerMobile>
            <ButtonContainerMobile>
              <GetStartedButtonMobile onClick={scrollToLoginFlex}>
                GetStarted
              </GetStartedButtonMobile>
            </ButtonContainerMobile>
            <DoctorNurseIllustrationMobile />
          </SubContainerMobile>
        </SubContainer2>
        <SubContainer4 ref={ref}>
          <SubContainer5>
            <ImageAndTextContainer>
              <Image src={Accessibility} />
              <SpecialityText>Accede desde cualquier lugar y en cualquier momento</SpecialityText>
            </ImageAndTextContainer>
            <ImageAndTextContainer>
              <Image src={BlockchainIllustration} />
              <SpecialityText>
                Plataforma 100% descentralizada y segura
              </SpecialityText>
            </ImageAndTextContainer>
            <ImageAndTextContainer>
              <Image src={PaperLess} />
              <SpecialityText>
                No necesitas cargar documentos de tu historial clinico ni recetas medicas
              </SpecialityText>
            </ImageAndTextContainer>
          </SubContainer5>
        </SubContainer4>
        <LoginText>Acceder a Medicaly</LoginText>
        <LoginFlex>
          <LoginContainer onClick={() => history.push("/login/patient")}>
            <LoginImage src={PatientLoginIllustration} />
            <LoginButton>Paciente </LoginButton>
          </LoginContainer>
          <LoginContainer onClick={() => history.push("/login/hospital")}>
            <LoginImage src={HospitalLoginIllustration} />
            <LoginButton>Hospital </LoginButton>
          </LoginContainer>
          <LoginContainer onClick={() => history.push("/login/admin")}>
            <LoginImage src={AdminLoginIllustration} />
            <LoginButton>Administrador</LoginButton>
          </LoginContainer>
          <LoginContainer onClick={() => history.push("/anyRecord")}>
            <LoginImage src={ViewAnyRecordsIllustration} />
            <LoginButton style={{ width: "90%" }}>Acceder a Registros</LoginButton>
          </LoginContainer>
        </LoginFlex>
        <Footer>&copy;Medicaly</Footer>
      </SubContainer1>
    </Container>
  );
};

export default LandingPage;
