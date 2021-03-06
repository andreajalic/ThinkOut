/*import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import UploadImage from "../Posts/UploadImage";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

import { registerUser } from "../../actions/authActions";

const styles = {
  textField: {
    width: "100%",
    marginBottom: 5,
  },
  btnBlock: {
    textAlign: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  sidePicture: {
    backgroundImage: `url(${require("./naslovna.png")})`,
    //paddingRight: "1rem",
    height: "8rem",
    width: "27rem",
    margin: "0 auto",
    //paddingRight: "3rem",
  },
};
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      login: "",
      password: "",
      password2: "",
      userImage: "",
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleImageUpload() {
    const { files } = document.querySelector('input[type="file"]');
    const formData = new FormData();
    formData.append("file", files[0]);
    // replace this with your upload preset name
    formData.append("upload_preset", "si1lo8jv");
    const options = {
      method: "POST",
      body: formData,
    };

    // replace cloudname with your Cloudinary cloud_name
    return (
      fetch("https://api.Cloudinary.com/v1_1/dtexexlkv/image/upload", options)
        .then((res) => res.json())
        //.then(res => console.log(res.secure_url, res.original_filename))

        .then((res) => {
          this.setState({
            userImage: res.secure_url,
            imageAlt: `An image of ${res.original_filename}`,
          });
        })
        .catch((err) => console.log(err))
    );
  }

  //handleChange --dobit cemo vrijednost polja i stanje komponente
  //kada upisemo lozinku, e.target je polje lozinke
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    //ako event nije eksplicitno handlan - defaultna akcija ne bi trebala biti provedena kao sto bi u normalnim slucajevima bila

    e.preventDefault();
    const userData = {
      email: this.state.email,
      login: this.state.login,
      password: this.state.password,
      password2: this.state.password2,
      userImage: this.state.userImage,
    };

    this.props.registerUser(userData, this.props.history);
  }
  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    const { showing } = this.state;

    return (
      <div
        style={{ margin: "0 auto", marginRight: "-5rem", marginLeft: "8rem" }}
      >
        <div className="Form">
          <div className="ThinkPic">
            <div className={classes.sidePicture}></div>
          </div>
          <div>
            <Paper style={{ padding: 8 }}>
              <form>
                <TextField
                  type="email"
                  label="Email"
                  className={classes.textField}
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                  helperText={errors.email ? errors.email : ""}
                  error={errors.email ? true : false}
                />
                <TextField
                  label="Login"
                  type="text"
                  name="login"
                  className={classes.textField}
                  value={this.state.login}
                  onChange={this.handleChange}
                  helperText={errors.login ? errors.login : ""}
                  error={errors.login ? true : false}
                />
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  className={classes.textField}
                  value={this.state.password}
                  onChange={this.handleChange}
                  helperText={errors.password ? errors.password : ""}
                  error={errors.password ? true : false}
                />
                <TextField
                  label="Repeat password"
                  type="password"
                  name="password2"
                  className={classes.textField}
                  value={this.state.password2}
                  onChange={this.handleChange}
                  helperText={errors.password2 ? errors.password2 : ""}
                  error={errors.password2 ? true : false}
                />
              </form>
              <div style={{ display: "-ms-inline-flexbox" }}>
                <button
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    outline: "none",
                  }}
                  onClick={() => this.setState({ showing: !showing })}
                >
                  <AddAPhotoIcon
                    style={{ color: "gray", marginTop: "0.5rem" }}
                  ></AddAPhotoIcon>
                </button>
                {showing ? (
                  <main className="App" style={{ display: "block" }}>
                    <section className="left-side">
                      <form className="formCss">
                        <div className="form-group" style={{ border: "none" }}>
                          <input type="file" />
                        </div>

                        <button
                          type="button"
                          className="btn"
                          onClick={this.handleImageUpload}
                        >
                          Upload image
                        </button>
                      </form>
                    </section>
                    <section className="right-side">
                      {this.state.userImage && (
                        <div>
                          <p>Your image</p>
                          <img
                            src={this.state.userImage}
                            alt={this.state.imageAlt}
                            className="displayed-image"
                          />
                        </div>
                      )}
                    </section>
                  </main>
                ) : null}
              </div>

              <div className={classes.btnBlock}>
                <Button
                  variant="outlined"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Register
                </Button>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(
  withRouter(withStyles(styles)(Register))
);
*/
import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import UploadImage from "../Posts/UploadImage";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { registerUser } from "../../actions/authActions";

const styles = {
  textField: {
    width: "100%",
    marginBottom: 5,
  },
  btnBlock: {
    textAlign: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  sidePicture: {
    //paddingRight: "1rem",
    height: "8rem",
    width: "27rem",
    margin: "0 auto",
    //paddingRight: "3rem",
  },

  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "2rem",
  },
  avatar: {
    margin: "1rem",
    backgroundColor: "red",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "3rem",
  },
  submit: {
    margin: "3rem 0rem 2rem",
  },
};
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      login: "",
      password: "",
      password2: "",
      userImage: "",
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleImageUpload() {
    const { files } = document.querySelector('input[type="file"]');
    const formData = new FormData();
    formData.append("file", files[0]);
    // replace this with your upload preset name
    formData.append("upload_preset", "si1lo8jv");
    const options = {
      method: "POST",
      body: formData,
    };

    // replace cloudname with your Cloudinary cloud_name
    return (
      fetch("https://api.Cloudinary.com/v1_1/dtexexlkv/image/upload", options)
        .then((res) => res.json())
        //.then(res => console.log(res.secure_url, res.original_filename))

        .then((res) => {
          this.setState({
            userImage: res.secure_url,
            imageAlt: `An image of ${res.original_filename}`,
          });
        })
        .catch((err) => console.log(err))
    );
  }

  //handleChange --dobit cemo vrijednost polja i stanje komponente
  //kada upisemo lozinku, e.target je polje lozinke
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    //ako event nije eksplicitno handlan - defaultna akcija ne bi trebala biti provedena kao sto bi u normalnim slucajevima bila

    e.preventDefault();
    const userData = {
      email: this.state.email,
      login: this.state.login,
      password: this.state.password,
      password2: this.state.password2,
      userImage: this.state.userImage,
    };

    this.props.registerUser(userData, this.props.history);
  }
  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    const { showing } = this.state;

    return (
      <Container component="main" maxWidth="sm">
        <CssBaseline />

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  helperText={errors.email ? errors.email : ""}
                  error={errors.email ? true : false}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="login"
                  label="Login"
                  type="text"
                  name="login"
                  className={classes.textField}
                  value={this.state.login}
                  onChange={this.handleChange}
                  helperText={errors.login ? errors.login : ""}
                  error={errors.login ? true : false}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  helperText={errors.password ? errors.password : ""}
                  error={errors.password ? true : false}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="password"
                  autoComplete="repeat-password"
                  label="Repeat password"
                  type="password"
                  name="password2"
                  value={this.state.password2}
                  onChange={this.handleChange}
                  helperText={errors.password2 ? errors.password2 : ""}
                  error={errors.password2 ? true : false}
                />
              </Grid>
            </Grid>
          </form>
          <div style={{ display: "grid" }}>
            <h6
              style={{
                fontWeight: "100",
                marginBottom: "0rem",
                display: "flex",
                margin: "0 auto",
                paddingTop: "1rem",
              }}
            >
              Click to add profile picture
            </h6>
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                outline: "none",
                display: "flex",
                margin: "0 auto",
              }}
              onClick={() => this.setState({ showing: !showing })}
            >
              {" "}
              <AddAPhotoIcon
                style={{ color: "gray", marginTop: "0.5rem" }}
              ></AddAPhotoIcon>
            </button>
            {showing ? (
              <main className="App" style={{ display: "block" }}>
                <section className="left-side">
                  <form className="formCss">
                    <div className="form-group" style={{ border: "none" }}>
                      <input type="file" />
                    </div>

                    <button
                      type="button"
                      className="btn"
                      onClick={this.handleImageUpload}
                    >
                      Upload image
                    </button>
                  </form>
                </section>
                <section className="right-side">
                  {this.state.userImage && (
                    <div>
                      <p>Your image</p>
                      <img
                        src={this.state.userImage}
                        alt={this.state.imageAlt}
                        className="displayed-image"
                      />
                    </div>
                  )}
                </section>
              </main>
            ) : null}
          </div>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(
  withRouter(withStyles(styles)(Register))
);
