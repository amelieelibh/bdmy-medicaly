import { QRCode } from "react-qrcode-logo";

// import { useAuth } from "../services/authorization";
// import { AUTHORITY_TYPES } from "../Constants/authorityTypes";
import { getInitials } from "../utils/dataUtils";

import {
  AdminDashboardContainer,
  Left,
  LeftHead,
  Center,
  Right,
  Row1,
  Row2,
  Row3,
  HospitalSVG,
  UserSVG,
  SecuritySVG,
  GraphSVG,
  DoctorSVG,
  Navlink,
  NavlinkActive,
  NavMenuList,
  ListItems,
  ListItemsActive,
  Note,
  NotesDiv,
  NoteTitle,
  NoteDescription,
  AdminStyling,
  TitleAdmin,
  Name,
  AdminCard,
  AdminHeading,
  AdminCardName,
  Circle,
  AdminCardDetails,
  AdminCardReg,
  AdminCardAdd,
  AdminCardRow3,
  FCName,
} from "./AdminDashboard.styled";

import {ReactComponent as Dashboardlogo} from "../assets/icons/admin/dashboardicon.svg";
import { ReactComponent as LogoutLogo } from "../assets/icons/admin/logouticon.svg";
import { ReactComponent as UserLogo } from "../assets/icons/admin/usericon.svg";
import { ReactComponent as SettingsLogo } from "../assets/icons/admin/settingsicon.svg";
import { ReactComponent as HospitalLogo } from "../assets/icons/admin/AddHospicon.svg";
import { ReactComponent as WaivingEmoji } from "../assets/icons/admin/waivinghand.svg";

import { ReactComponent as AdminLogo } from "../assets/icons/admin/AdminProfile.svg";
import { ReactComponent as TickMark } from "../assets/icons/admin/greentick.svg";

import { ReactComponent as HospRegs } from "../assets/icons/admin/RegHospitals.svg";
import { ReactComponent as UserRegs } from "../assets/icons/admin/RegUsers.svg";
import { ReactComponent as Security } from "../assets/icons/admin/security.svg";
import { ReactComponent as Graph } from "../assets/icons/admin/Graph.svg";
import { ReactComponent as Doctor } from "../assets/icons/admin/doctor.svg";

import {useWalletState} from "../utils/WalletConnect";
import { useMedicineSupply } from "../utils/SmartContractHelper";
import { useEffect } from "react";

const AdminDashboard = () => {
  // const auth = useAuth();
  // const adminInfo = auth.entityInfo;
  // console.log(adminInfo);

  const walletState = useWalletState(window);
  // console.log("walletState", walletState);
  const {medicineSupplyAddress, medicineSupplyContract, loadingMedicineSupply} = useMedicineSupply(walletState);

  useEffect(() => {
    console.log("medicineSupplyAddress", medicineSupplyAddress);
    console.log("medicineSupplyContract", medicineSupplyContract);
    console.log("loadingMedicineSupply", loadingMedicineSupply);
  }, [medicineSupplyAddress, medicineSupplyContract, loadingMedicineSupply]);

  // if (!auth.loggedIn) return <Navigate to="/login/admin" />;

  // if (auth.authority !== AUTHORITY_TYPES.ADMIN) return <Navigate to="/" />;

  const logout = () => {
  };

  return (
    <AdminDashboardContainer>
      <Left>
        <LeftHead>
          Hi, admin
          &nbsp;
          <WaivingEmoji />
          &nbsp;
          {/* Admin name */}
        </LeftHead>
        <NavMenuList>
          <ListItemsActive>
            {/* <Navlink to="/newRecord">Dashboard</Navlink> */}
            <NavlinkActive to="/adminDashboard">
              <div>
                <Dashboardlogo />
                &nbsp;
              </div>
              <div>
                &nbsp;
                Dashboard
              </div>
            </NavlinkActive>
          </ListItemsActive>
          <ListItems>
            <Navlink to="/newPatient">
              <div>
                <UserLogo />
                &nbsp;
              </div>
              <div>
                &nbsp;
                User Registration
              </div>
            </Navlink>
          </ListItems>
          <ListItems>
            <Navlink to="/newHospital">
              <div>
                <HospitalLogo />
                &nbsp;
              </div>
              <div>
                &nbsp;
                Hospital Registration
              </div>
            </Navlink>
          </ListItems>
          <ListItems>
            <Navlink onClick={logout} to="">
              <div>
                <LogoutLogo />
                &nbsp;
              </div>
              <div>
                &nbsp;
                &nbsp;
                Logout
              </div>
            </Navlink>
          </ListItems>
          <ListItems>
            <Navlink to="">
              <div>
                <SettingsLogo />
                &nbsp;
              </div>
              <div>
                &nbsp;
                Settings
              </div>
            </Navlink>
          </ListItems>
        </NavMenuList>
        <Note>
          <NotesDiv>
            <NoteTitle>
              Note
                &nbsp;:
                &nbsp;
            </NoteTitle>
            <NoteDescription>
              Admin must strictly verify the revelant doucments during the
              registration process
            </NoteDescription>
          </NotesDiv>
        </Note>
      </Left>
      <Center>
        <Row1>
          <HospitalSVG>
            <HospRegs />
          </HospitalSVG>
          <UserSVG>
            <UserRegs />
          </UserSVG>
        </Row1>
        <Row2>
          <SecuritySVG>
            <Security />
          </SecuritySVG>
        </Row2>
        <Row3>
          <GraphSVG>
            <Graph />
          </GraphSVG>
          <DoctorSVG>
            <Doctor />
          </DoctorSVG>
        </Row3>
      </Center>
      <Right>
        <div className="text-center">
            <AdminStyling>
              <AdminLogo />
            </AdminStyling>
        </div>
        <div className="text-center">
            <Name>{"name"}</Name>
            <br />
            <TitleAdmin>
              Admin <TickMark />
            </TitleAdmin>
            <br />
            <QRCode size={100} value={walletState?.userAddress} fgColor="#101010" />
        </div>
        <div className="text-center">
          <AdminCard>
            <AdminHeading>
              <Circle>{getInitials("name")}</Circle>
              <AdminCardName>{"name"}</AdminCardName>
            </AdminHeading>
            <AdminCardDetails>
              <AdminCardReg>
                <div>
                  Reg No.
                  &nbsp;:
                  &nbsp;
                </div>
                <div>
                  &nbsp;
                  {walletState?.userAddress}
                </div>
              </AdminCardReg>
              <AdminCardAdd>
                <div>
                  Address
                  &nbsp;:
                  &nbsp;
                </div>
                <div>{walletState?.userAddress}</div>
              </AdminCardAdd>
            </AdminCardDetails>
            <AdminCardRow3>
              <FCName>FC Card</FCName>
            </AdminCardRow3>
          </AdminCard>
        </div>
      </Right>
    </AdminDashboardContainer>
  );
};

export default AdminDashboard;
