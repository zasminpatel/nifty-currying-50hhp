import { Grid, Typography, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { format } from "date-fns";
import PageTitleWrapper from "../../../components/PageTitleWrapper";
export default function Profile() {
  const user = { name: "jasmin patel", avatar: "1.jpg" };
  const theme = useTheme();
  return (
    <>
      {/* <Helmet>
        <title>Analytics Dashboard</title>
      </Helmet> */}
      <PageTitleWrapper>
        {/* <PageHeader /> */}
        <Grid container alignItems="center">
          <Grid item>
            <Avatar
              sx={{
                mr: 2,
                width: theme.spacing(8),
                height: theme.spacing(8)
              }}
              variant="rounded"
              alt={user.name}
              src={user.avatar}
            />
          </Grid>
          <Grid item>
            <Typography variant="h3" component="h3" gutterBottom>
              {/* {t("Welcome")}, {user.name}! */}
              {"Welcome"}, {user.name}!
            </Typography>
            <Typography variant="subtitle2">
              {/* {t("These are your analytics stats for today")},{" "} */}
              {"These are your analytics stats for today"},{" "}
              <b>{format(new Date(), "MMMM dd yyyy")}</b>
            </Typography>
          </Grid>
        </Grid>
      </PageTitleWrapper>
      <Grid
        sx={{ px: 4 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item lg={8} md={6} xs={12}>
          <Grid
            container
            spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="stretch"
          >
            Profile
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
