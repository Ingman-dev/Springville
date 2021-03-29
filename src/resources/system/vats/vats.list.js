import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ReferenceInput,
  SelectInput,
  TextInput,
  Filter,
  SimpleList,
} from "react-admin";

const Filters = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="alias" alwaysOn />
    <ReferenceInput
      label="Country"
      source="country.alias"
      reference="countries"
      allowEmpty
      alwaysOn
    >
      <SelectInput optionText="title" />
    </ReferenceInput>
  </Filter>
);

export const WebList = (props) => (
  <List filters={<Filters />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="country.alias" label="Country" />
      <TextField source="alias" />
      <TextField source="title" />
      <TextField source="percentage" />
      <EditButton />
    </Datagrid>
  </List>
);

const MobileList = (props) => (
  <List {...props}>
    <SimpleList
      primaryText={(record) => record.title}
      secondaryText={(record) => `${record.body}`}
      tertiaryText={(record) => record.id}
    />
  </List>
);

export const VatsList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  if (isSmall) return <MobileList {...props} />;
  return <WebList {...props} />;
};
