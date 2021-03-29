import * as React from "react";
import { Edit } from "react-admin";
import { OrganisationsForm } from "./organisations.form";

const Title = ({ record }) => {
  return <span> {record ? `${record.title}` : ""}</span>;
};

export const OrganisationsEdit = (props) => (
  <Edit title={<Title />} {...props}>
    <OrganisationsForm {...props} />
  </Edit>
);
