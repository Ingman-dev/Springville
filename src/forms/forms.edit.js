import * as React from "react";
import { Edit } from "react-admin";
import { FormsForm } from "./forms.form";

const Title = ({ record }) => {
  return <span> {record ? `${record.title}` : ""}</span>;
};

export const FormsEdit = (props) => (
  <Edit title={<Title />} {...props}>
    <FormsForm {...props} />
  </Edit>
);
