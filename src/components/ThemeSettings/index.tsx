import { FC, useContext, useRef, useState } from "react";
import {
  Popover,
  Button,
  MenuItem,
  Menu,
  Typography,
  Stack,
  Divider,
  Box,
  Tooltip
} from "@mui/material";
import { ThemeContext } from "../../theme/ThemeProvider";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import Fab from "@mui/material/Fab";
// import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import UnfoldMoreTwoToneIcon from "@mui/icons-material/UnfoldMoreTwoTone";
import { NavLink } from "react-router-dom";

const ThemeSettingsButton = styled(Box)(
  ({ theme }) => `
          position: fixed;
          z-index: 9999;
          right: ${theme.spacing(4)};
          bottom: ${theme.spacing(4)};
  `
);

const ThemeToggleWrapper = styled(Box)(
  ({ theme }) => `
          padding: ${theme.spacing(2)};
          min-width: 220px;
  `
);

const ButtonWrapper = styled(Box)(
  ({ theme }) => `
        cursor: pointer;
        position: relative;
        border-radius: ${theme.general.borderRadiusXl};
        padding: ${theme.spacing(0.8)};
        display: flex;
        flex-direction: row;
        align-items: stretch;
        min-width: 80px;
        box-shadow: 0 0 0 2px ${theme.colors.primary.lighter};

        &:hover {
            box-shadow: 0 0 0 2px ${theme.colors.primary.light};
        }

        &.active {
            box-shadow: 0 0 0 2px ${theme.palette.primary.main};

            .colorSchemeWrapper {
                opacity: .6;
            }
        }
  `
);

const ColorSchemeWrapper = styled(Box)(
  ({ theme }) => `

    position: relative;

    border-radius: ${theme.general.borderRadiusXl};
    height: 28px;
    
    &.colorSchemeWrapper {
        display: flex;
        align-items: stretch;
        width: 100%;

        .primary {
            border-top-left-radius: ${theme.general.borderRadiusXl};
            border-bottom-left-radius: ${theme.general.borderRadiusXl};
        }

        .secondary {
            border-top-right-radius: ${theme.general.borderRadiusXl};
            border-bottom-right-radius: ${theme.general.borderRadiusXl};
        }

        .primary,
        .secondary,
        .alternate {
            flex: 1;
        }
    }

    &.pureLight {
        .primary {
            background: #5569ff;
        }
    
        .secondary {
            background: #f2f5f9;
        }
    }

    &.lightBloom {
        .primary {
            background: #1975FF;
        }
    
        .secondary {
            background: #000C57;
        }
    }

    &.greyGoose {
        .primary {
            background: #2442AF;
        }
    
        .secondary {
            background: #F8F8F8;
        }
    }
    
    &.purpleFlow {
        .primary {
            background: #9b52e1;
        }
    
        .secondary {
            background: #00b795;
        }
    }

  `
);

const CheckSelected = styled(Box)(
  ({ theme }) => `
    background: ${theme.palette.success.main};
    border-radius: 50px;
    height: 26px;
    width: 26px;
    color: ${theme.palette.success.contrastText};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -13px 0 0 -13px;
    z-index: 5;

    .MuiSvgIcon-root {
        height: 16px;
        width: 16px;
    }

  `
);

const ThemeSettings: FC = (_props) => {
  // const { t }: { t: any } = useTranslation();

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const setThemeName = useContext(ThemeContext);
  const curThemeName = localStorage.getItem("appTheme") || "PureLightTheme";

  const [theme, setTheme] = useState(curThemeName);

  const changeTheme = (theme): void => {
    setTheme(theme);
    setThemeName(theme);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ThemeSettingsButton>
        <Tooltip
          arrow
          // title={t("Theme Settings")}
          title={"Theme Settings"}
        >
          <Fab ref={ref} onClick={handleOpen} color="primary" aria-label="add">
            <SettingsTwoToneIcon />
          </Fab>
        </Tooltip>
        <Popover
          anchorEl={ref.current}
          onClose={handleClose}
          open={isOpen}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
        >
          <Box p={2}>
            <Typography
              sx={{
                mb: 2,
                textAlign: "center",
                fontWeight: "bold",
                textTransform: "uppercase"
              }}
              variant="body1"
            >
              Layout Blueprints
            </Typography>
            <Button
              fullWidth
              size="large"
              variant="outlined"
              endIcon={<UnfoldMoreTwoToneIcon />}
              color="primary"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={openMenu}
            >
              Choose layout
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={closeMenu}
              anchorOrigin={{
                vertical: "center",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "center",
                horizontal: "center"
              }}
            >
              <MenuItem
                sx={{ fontWeight: "bold" }}
                component={NavLink}
                to="/dashboards"
              >
                Accent header
              </MenuItem>
              <MenuItem
                sx={{ fontWeight: "bold" }}
                component={NavLink}
                to="/accent-sidebar/dashboards"
              >
                Accent sidebar
              </MenuItem>
              <MenuItem
                sx={{ fontWeight: "bold" }}
                component={NavLink}
                to="/boxed-sidebar/dashboards"
              >
                Boxed sidebar
              </MenuItem>
              <MenuItem
                sx={{ fontWeight: "bold" }}
                component={NavLink}
                to="/collapsed-sidebar/dashboards"
              >
                Collapsed sidebar
              </MenuItem>
              <MenuItem
                sx={{ fontWeight: "bold" }}
                component={NavLink}
                to="/bottom-navigation/dashboards"
              >
                Bottom navigation
              </MenuItem>
              <MenuItem
                sx={{ fontWeight: "bold" }}
                component={NavLink}
                to="/top-navigation/dashboards"
              >
                Top navigation
              </MenuItem>
            </Menu>
          </Box>
          <Divider />
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
          >
            <ThemeToggleWrapper>
              <Typography
                sx={{
                  mt: 1,
                  mb: 3,
                  textAlign: "center",
                  fontWeight: "bold",
                  textTransform: "uppercase"
                }}
                variant="body1"
              >
                Light color schemes
              </Typography>
              <Stack alignItems="center" spacing={2}>
                <Tooltip placement="left" title="Pure Light" arrow>
                  <ButtonWrapper
                    className={theme === "PureLightTheme" ? "active" : ""}
                    onClick={() => {
                      changeTheme("PureLightTheme");
                    }}
                  >
                    {theme === "PureLightTheme" && (
                      <CheckSelected>
                        <CheckTwoToneIcon />
                      </CheckSelected>
                    )}
                    <ColorSchemeWrapper className="colorSchemeWrapper pureLight">
                      <Box className="primary" />
                      <Box className="secondary" />
                    </ColorSchemeWrapper>
                  </ButtonWrapper>
                </Tooltip>
                <Tooltip placement="left" title="Light Bloom" arrow>
                  <ButtonWrapper
                    className={theme === "LightBloomTheme" ? "active" : ""}
                    onClick={() => {
                      changeTheme("LightBloomTheme");
                    }}
                  >
                    {theme === "LightBloomTheme" && (
                      <CheckSelected>
                        <CheckTwoToneIcon />
                      </CheckSelected>
                    )}
                    <ColorSchemeWrapper className="colorSchemeWrapper lightBloom">
                      <Box className="primary" />
                      <Box className="secondary" />
                    </ColorSchemeWrapper>
                  </ButtonWrapper>
                </Tooltip>
                <Tooltip placement="left" title="Grey Goose" arrow>
                  <ButtonWrapper
                    className={theme === "GreyGooseTheme" ? "active" : ""}
                    onClick={() => {
                      changeTheme("GreyGooseTheme");
                    }}
                  >
                    {theme === "GreyGooseTheme" && (
                      <CheckSelected>
                        <CheckTwoToneIcon />
                      </CheckSelected>
                    )}
                    <ColorSchemeWrapper className="colorSchemeWrapper greyGoose">
                      <Box className="primary" />
                      <Box className="secondary" />
                    </ColorSchemeWrapper>
                  </ButtonWrapper>
                </Tooltip>
                <Tooltip placement="left" title="Purple Flow" arrow>
                  <ButtonWrapper
                    className={theme === "PurpleFlowTheme" ? "active" : ""}
                    onClick={() => {
                      changeTheme("PurpleFlowTheme");
                    }}
                  >
                    {theme === "PurpleFlowTheme" && (
                      <CheckSelected>
                        <CheckTwoToneIcon />
                      </CheckSelected>
                    )}
                    <ColorSchemeWrapper className="colorSchemeWrapper purpleFlow">
                      <Box className="primary" />
                      <Box className="secondary" />
                    </ColorSchemeWrapper>
                  </ButtonWrapper>
                </Tooltip>
              </Stack>
            </ThemeToggleWrapper>
          </Stack>
        </Popover>
      </ThemeSettingsButton>
    </>
  );
};

export default ThemeSettings;
