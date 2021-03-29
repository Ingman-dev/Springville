import * as React from "react";
import { Create } from "react-admin";
import { CountriesForm } from "./countries.form";

export const CountriesCreate = (props) => (
  <Create {...props} {...props}>
    <CountriesForm {...props} />
  </Create>
);
