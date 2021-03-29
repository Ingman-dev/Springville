import { Box, Typography } from "@material-ui/core";
import * as React from "react";
import { AppBar, Layout, ReferenceInput, SelectInput, Filter } from "react-admin";
// import { useSelector } from "react-redux";

const MyAppBar = (props) => {
  //const organsiation = useSelector((state) => state.organisation);
  const organsiation = { title: "Cafe Minimal" };

  return (
    <AppBar {...props}>
      <Box flex="1">
        <Typography variant="h6" id="react-admin-title"></Typography>
      </Box>
      <Filter {...props}>
        <ReferenceInput label="Organisation" source="alias" reference="organisations" alwaysOn>
          <SelectInput optionText="title" />
        </ReferenceInput>
      </Filter>

      {organsiation ? <Typography variant="h6">{organsiation.title}</Typography> : ""}
    </AppBar>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export const EPLayout = (props) => <Layout {...props} appBar={MyAppBar} />;
