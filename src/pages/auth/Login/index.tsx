import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { CircularProgress } from "@mui/material";

import "./login.css";

export default function Login() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    isSubmitting: false
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      isSubmitting: true
    });
    setTimeout(() => {
      setFormData({
        ...formData,
        isSubmitting: false
      });
      navigate("/app");
    }, 3000);
  };
  // const { username, password, isSubmitting } = formData;
  return (
    <>
      <div>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              spacing={2}
              className="login-form"
            >
              <Paper
                variant="elevation"
                elevation={2}
                className="login-background"
              >
                <Grid justifyContent="center">
                  <Grid item>
                    <Typography component="h1" variant="h5">
                      Sign in
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <form onSubmit={handleSubmit}>
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <TextField
                          type="text"
                          placeholder="Username"
                          fullWidth
                          name="username"
                          label="Username"
                          variant="outlined"
                          value={formData.username}
                          onChange={handleChange}
                          required
                          autoFocus
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          type="password"
                          placeholder="Password"
                          fullWidth
                          name="password"
                          variant="outlined"
                          margin="normal"
                          label="Password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          sx={{ mt: 3 }}
                          color="primary"
                          startIcon={
                            formData.isSubmitting ? (
                              <CircularProgress size="1rem" />
                            ) : null
                          }
                          disabled={formData.isSubmitting}
                          type="submit"
                          fullWidth
                          size="large"
                          variant="contained"
                        >
                          Submit
                        </Button>

                        {/* <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          className="button-block"
                        >
                          Submit
                        </Button> */}
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
                <Grid item>
                  <NavLink to="/register">Register</NavLink>
                  {/* <Link href="#" variant="body2">
                    Forgot Password?
                  </Link> */}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
