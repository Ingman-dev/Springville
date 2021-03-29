import * as React from "react";
import { TextInput, FormWithRedirect } from "react-admin";
import { Box } from "@material-ui/core";
import { EPToolbar } from "../../../components/EPToolbar";

export const OrganisationsForm = (props) => {
  return (
    <FormWithRedirect
      {...props}
      render={(formProps) => (
        <form>
          <Box p="1em">
            <Box display="flex">
              <Box flex={2} mr="1em">
                <Box display="flex">
                  <Box flex={1} mr="0.5em">
                    <TextInput source="alias" fullWidth />
                  </Box>
                  <Box flex={1} ml="0.5em">
                    <TextInput source="name" fullWidth />
                  </Box>
                  <Box flex={1} ml="0.5em">
                    <TextInput source="title" fullWidth />
                  </Box>
                </Box>
                <Box display="flex">
                  <Box flex={1} mr="0.5em">
                    <TextInput source="companyName" fullWidth />
                  </Box>
                  <Box flex={1} ml="0.5em">
                    <TextInput source="organisationNumber" fullWidth />
                  </Box>
                </Box>
                <Box display="flex">
                  <Box flex={1} mr="0.5em">
                    <TextInput source="postAddress.country" fullWidth />
                  </Box>
                  <Box flex={1} ml="0.5em">
                    <TextInput source="visitAddress.country" fullWidth />
                  </Box>
                </Box>
                <Box display="flex">
                  <Box flex={1} mr="0.5em">
                    <TextInput source="website.country" fullWidth />
                  </Box>
                  <Box flex={1} ml="0.5em">
                    <TextInput source="email" fullWidth />
                  </Box>
                </Box>
                <Box display="flex">
                  <Box flex={1} mr="0.5em">
                    <TextInput source="phone" fullWidth />
                  </Box>
                  <Box flex={1} ml="0.5em">
                    <TextInput source="contact.phone" fullWidth />
                  </Box>
                </Box>
                <Box display="flex">
                  <Box flex={1} mr="0.5em">
                    <TextInput source="description.text" label="Description" multiline fullWidth />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <EPToolbar {...formProps} />
        </form>
      )}
    />
  );
};
