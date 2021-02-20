import { Box, Container, Link, Paper, Typography } from "@material-ui/core";
import React from "react";
import "./Footer.scss";

import digitalOcean from "../../images/digitalocean.png";
import docker from "../../images/docker.png";
import express from "../../images/express.png";
import materialui from "../../images/material ui.png";
import mongodb from "../../images/mongodb.png";
import react from "../../images/react.png";
import typescript from "../../images/typescript.png";

export default function Footer() {
  const renderImageLink = (link: string, imagePath: string) => {
    return (
      <Paper elevation={0}>
        <Link href={link}>
          <img className="skryte-bilde" src={imagePath} alt={imagePath} />
        </Link>
      </Paper>
    );
  };

  return (
    <>
      <Container className="created-with">
        <Typography variant="overline">created with</Typography>
      </Container>
      <Box display="flex" justifyContent="space-around" flexWrap="wrap">
        {renderImageLink("https://www.digitalocean.com/", digitalOcean)}
        {renderImageLink("https://www.docker.com/", docker)}
        {renderImageLink("https://expressjs.com/", express)}
        {renderImageLink("https://material-ui.com/", materialui)}
        {renderImageLink("https://www.mongodb.com/", mongodb)}
        {renderImageLink("https://reactjs.org/", react)}
        {renderImageLink("https://www.typescriptlang.org/", typescript)}
      </Box>
    </>
  );
}
