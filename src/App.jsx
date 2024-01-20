import {
  Hero,
  Header,
  Footer,
  HowToGet,
  CTA,
  Contact,
  HowItWorks,
  ContactBtn,
  BasicModal,
} from "./components";
import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import "./index.css";
import { Typography } from "@mui/material";
const App = () => {
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleAlertOpen() {
    setAlert(true);
  }
  function handleAlertClose() {
    setAlert(false);
  }
  return (
    <>
      <div className=" relative " dir="RTL">
        <Header />

        <Hero
          handleOpen={handleOpen}
          handleAlertOpen={handleAlertOpen}
          handleAlertClose={handleAlertClose}
        />
        <ContactBtn />
        <HowItWorks />
        <CTA />
        <HowToGet />
        <Contact
          handleOpen={handleOpen}
          handleAlertOpen={handleAlertOpen}
          handleAlertClose={handleAlertClose}
        />
        <Footer />
        {open ? (
          <BasicModal handleOpen={handleOpen} handleClose={handleClose} />
        ) : null}
        {alert ? (
          <Alert
            variant="filled"
            severity="info"
            style={{
              position: "fixed",
              zIndex: "100",
            }}
            className="alert"
          >
            <div className=" px-2">من فضلك قم بملئ كل المعلومات اللازمة</div>
          </Alert>
        ) : null}
      </div>
    </>
  );
};

export default App;
