import * as React from "react";
import { Create } from "react-admin";
import { OrganisationsForm } from "./organisations.form";

export const OrganisationsCreate = (props) => (
  <Create {...props} {...props}>
    <OrganisationsForm {...props} />
  </Create>
);
