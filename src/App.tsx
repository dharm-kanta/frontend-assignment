import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Slider from "@mui/material/Slider";
import PopoverMenu from "./PopoverMenu";
import ProTip from "./ProTip";

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: "text.secondary",
      }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.dharmkanta.in/">
        Dharmkanta
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <div className="my-4">
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          frontend-landing
        </Typography>
        <Slider
          className="my-4"
          defaultValue={30}
          classes={{ active: "shadow-none" }}
          slotProps={{ thumb: { className: "hover:shadow-none" } }}
        />
        <PopoverMenu />
        <ProTip />
        <Copyright />
      </div>
    </Container>
  );
}
