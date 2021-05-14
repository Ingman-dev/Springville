import * as React from "react";
import { Edit } from "react-admin";
import { MyFormsForm } from "./myForms.form";

const Title = ({ record }) => {
  return <span> {record ? `${record.title}` : ""}</span>;
};

export const MyFormsEdit = (props) => (
  <Edit title={<Title />} {...props}>
    <MyFormsForm {...props} />
  </Edit>
);
