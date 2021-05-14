import * as React from "react";
import { Create } from "react-admin";
import { MyFormsForm } from "./myForms.form";

export const MyFromsCreate = (props) => (
  <Create {...props} {...props}>
    <MyFormsForm {...props} />
  </Create>
);
