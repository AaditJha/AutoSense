import { Box, Button, TextField, makeStyles } from "@material-ui/core";
import React from "react";
import "../../styles/Contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";

const useStyles = makeStyles({
  start: {
    background: "#6cc3cf",
    border: 0,
    borderRadius: 5,
    textTransform: "none",
    color: "#fff",
    padding: "2% 2%",
    float: "right",
    "&:hover": {
      background: "#a1a1a1",
    },
  },
});

function Contact() {
  function sendQuery(e) {
    e.preventDefault();
    console.log("HELLO");
  }
  const classes = useStyles();
  return (
    <Box className="contact-body">
      <Box className="contact-card">
        <img src="./img/me.png" alt="me" className="profile-image"/>
        <div className="contact-title">
          Hi,
          <br /> I'm Aadit
        </div>

        <div style={{ color: "#262626", fontSize: "medium" }}>
          Student | CSE'24 | IIIT Delhi
        </div>
        <div style={{ color: "#fff", fontSize: "small", fontWeight:"bold", paddingTop:"15%" }}>
          Contact Me
        </div>
        <div className="social-media-container">
            <TwitterIcon className="social-medias" />
          <a href="https://github.com/AaditJha" target="_blank">
            <GitHubIcon className="social-medias" />
          </a>
          <a
            href="https://www.linkedin.com/in/aadit-jha-237363210/"
            target="_blank"
          >
            <LinkedInIcon className="social-medias" />
          </a>
            <MailIcon className="social-medias" />
        </div>
      </Box>
      <Box className="query-card">
        <form className="query-form" onSubmit={sendQuery}>
          <TextField
            id="standard-basic-name"
            label="Name"
            variant="standard"
            margin="normal"
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            id="standard-basic-mail"
            label="E-Mail"
            variant="standard"
            margin="normal"
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            id="outlined-basic-message"
            label="Your Message"
            variant="outlined"
            margin="normal"
            multiline={true}
            minRows={8}
            maxRows={8}
            fullWidth
            required
          />
          <Button className={classes.start} type="submit">
            Send Query
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Contact;
