import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import { List, Datagrid, TextField, EditButton, TextInput, Filter, SimpleList } from "react-admin";

const Filters = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

export const WebList = (props) => (
  <List filters={<Filters />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="alias" />
      <TextField source="name" />
      <TextField source="title" />
      <TextField source="companyName" />
      <TextField source="phone" />
      <TextField source="email" />
      <TextField source="organisationNumber" />
      <EditButton />
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

export const OrganisationsList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  if (isSmall) return <MobileList {...props} />;
  return <WebList {...props} />;
};
