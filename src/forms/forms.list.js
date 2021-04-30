import * as React from "react";
import { Button } from "@material-ui/core";
import { List, Datagrid, TextField, FileField, EditButton, DeleteButton } from "react-admin";


export const WebList = (props) => (
    <List {...props} bulkActionButtons={false}>
      <Datagrid rowClick="edit">
        <TextField label="Form" source="formNo" />
        <TextField label="Filesize" source="size"/>
        <TextField source="title" />
        <FileField label="Download" source="downloadUrl" title="fileName" />
      </Datagrid>
    </List>
  );
  
  export const FormsList = (props) => {
    return <WebList {...props} />;
  };  