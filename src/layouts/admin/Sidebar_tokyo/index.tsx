import { useContext, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
// import { SidebarContext } from "src/contexts/SidebarContext";

import { Box, Drawer, Hidden } from "@mui/material";

import { styled } from "@mui/material/styles";
import SidebarMenu from "./SidebarMenu";
import SidebarTopSection from "./SidebarTopSection";
// import Logo from "src/components/LogoSign";

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.sidebar.textColor};
        background: ${theme.sidebar.background};
        box-shadow: ${theme.sidebar.boxShadow};
        position: relative;
        z-index: 5;
        height: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
          height: calc(100% - ${theme.header.height});
          margin-top: ${theme.header.height};
        }
`
);

const TopSection = styled(Box)(
  ({ theme }) => `
        margin: ${theme.spacing(2)};
`
);

function Sidebar() {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };
  // const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();

  return (
    <>
      <Hidden lgDown>
        <SidebarWrapper>
          <Scrollbars autoHide>
            <TopSection>
              <SidebarTopSection />
            </TopSection>
            <SidebarMenu />
          </Scrollbars>
        </SidebarWrapper>
      </Hidden>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          open={sidebarToggle}
          onClose={closeSidebar}
          variant="temporary"
          elevation={9}
        >
          <SidebarWrapper>
            <Scrollbars autoHide>
              <TopSection>
                <Box sx={{ width: 52, ml: 1, mt: 1, mb: 3 }}>
                  {/* <Logo /> */}
                </Box>
                <SidebarTopSection />
              </TopSection>
              <SidebarMenu />
            </Scrollbars>
          </SidebarWrapper>
        </Drawer>
      </Hidden>
    </>
  );
}

export default Sidebar;
