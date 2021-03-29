import * as React from "react";
import { Create } from "react-admin";
import { VatsForm } from "./vats.form";

export const VatsCreate = (props) => (
  <Create {...props} {...props}>
    <VatsForm {...props} />
  </Create>
);
