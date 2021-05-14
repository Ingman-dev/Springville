import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  List,
  Datagrid,
  TextField,
  FileField,
  SimpleList,
  Filter,
  TextInput,
  EditButton,
  DeleteButton
} from "react-admin";

const Filters = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="formNo" alwaysOn />
  </Filter>
);

export const WebList = (props) => (
  <List filters={<Filters />} {...props} bulkActionButtons={false}>
    <Datagrid rowClick="edit">
      <TextField label="formNo" source="formNo" />
      <TextField source="title" />
      <FileField label="Download" source="downloadUrl" title="fileName" />
      <EditButton />
      <DeleteButton/>
    </Datagrid>
  </List>
);
const MobileList = (props) => (
  <List {...props}>
    <SimpleList
      primaryText={(record) => record.title}
      secondaryText={(record) => `${record.phone || ""} ${record.email || ""}`}
      tertiaryText={(record) => record.organisationNumber}
    />
  </List>
);

export const MyFormsList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  if (isSmall) return <MobileList {...props} />;
  return <WebList {...props} />;
};
