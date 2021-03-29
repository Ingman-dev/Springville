import * as React from "react";
import { ReferenceInput, SelectInput, TextInput, FormWithRedirect } from "react-admin";
import { Box } from "@material-ui/core";
import { EPToolbar } from "../../../components/EPToolbar";

export const VatsForm = (props) => (
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
                  <TextInput source="title" fullWidth />
                </Box>
              </Box>
              <Box display="flex">
                <Box flex={1} mr="0.5em">
                  <ReferenceInput
                    source="country.alias"
                    reference="countries"
                    label="Country"
                    fullWidth
                  >
                    <SelectInput optionText="title" />
                  </ReferenceInput>
                </Box>
                <Box flex={1} ml="0.5em">
                  <TextInput source="percentage" fullWidth />
                </Box>
              </Box>

              <TextInput source="description" multiline fullWidth />
            </Box>
          </Box>
        </Box>
        <EPToolbar {...formProps} />
      </form>
    )}
  />
);
