import * as React from "react";
import { Edit } from "react-admin";
import { CountriesForm } from "./countries.form";

const Title = ({ record }) => {
  return <span> {record ? `${record.title}` : ""}</span>;
};

export const CountriesEdit = (props) => (
  <Edit title={<Title />} {...props}>
    <CountriesForm {...props} />
  </Edit>
);
