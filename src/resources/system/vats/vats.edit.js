import * as React from "react";
import { Edit } from "react-admin";
import { VatsForm } from "./vats.form";

const Title = ({ record }) => {
  return <span> {record ? `${record.title}` : ""}</span>;
};

export const VatsEdit = (props) => (
  <Edit title={<Title />} {...props}>
    <VatsForm {...props} />
  </Edit>
);
