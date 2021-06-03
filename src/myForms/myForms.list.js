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
  DeleteButton,

} from "react-admin";

const Filters = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="formNo" alwaysOn />
  </Filter>
);


export const WebList = (props) => (
  <List filters={<Filters />} {...props} bulkActionButtons={false} >
    <Datagrid>
      <TextField label="No" source="formNo"  />
      <TextField source="title" />
      <EditButton label="Edit" />
      <FileField label="Download" source="downloadUrl" title="fileName"/>
      <DeleteButton/>
    </Datagrid>
  </List>
);
const MobileList = (props) => (
  <List {...props}>
    <SimpleList
      primaryText={(record) => record.formNo}
      secondaryText={(record) => `${record.title || ""} ${record.Edit || ""}`}
      tertiaryText={(record) => record.downloadUrl}
    />
  </List>
);

export const MyFormsList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  if (isSmall) return <MobileList {...props} />;
  return <WebList {...props} />;
};
