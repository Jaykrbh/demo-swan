import React, { Fragment } from "react";
import Form from "./Form";
import Leads from "./Leads";
import Scan from "./Scan";
import Results from "./Results";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Scan />
      <Leads />
      <Results />
    </Fragment>
  );
}
