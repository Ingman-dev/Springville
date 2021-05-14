import * as React from "react";
import { Create } from "react-admin";
import { FormsForm } from "./forms.form";

export const FromsCreate = (props) => (
  <Create {...props} {...props}>
    <FormsForm {...props} />
  </Create>
);
