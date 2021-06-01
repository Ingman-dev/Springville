import * as React from "react";
import {
  TextInput,
  FormWithRedirect,
  FileField,
  FileInput,
  DateTimeInput,
  BooleanInput,
  required
} from "react-admin";
import { Box } from "@material-ui/core";
import { EPToolbar } from "../components/EPToolbar";

export const MyFormsForm = (props) => {
  return (
    <FormWithRedirect
      {...props}
      render={(formProps) => (
        <form>
          <Box p="1em">
            <Box display="flex">
              <Box flex={2} mr="1em">
                <Box display="flex" mr="0.5em">
                  <TextInput fullWidth source="title" label="Title" validate={required()} />
                </Box>
                <Box display="flex" mr="0.5em">
                  <TextInput fullWidth source="formNo" label="Form No" validate={required()} />
                </Box>
                <Box display="flex" mr="0.5em">
                  <TextInput fullWidth label="Type" source="type" validate={required()} />
                </Box>
                <Box display="flex" mr="0.5em">
                  <TextInput fullWidth label="Tag" source="tag" validate={required()} />
                </Box>
                <BooleanInput label="Active" source="publish.active" />
                <DateTimeInput source="publish.from" validate={required()} />
                <DateTimeInput source="publish.to" validate={required()} />
                <Box display="flex">
                  <Box flex={1} mr="0.5em">
                    <FileInput
                      source="uri"
                      label="Upload file (.pdf)"
                      accept="application/pdf"
                      multiple={false}
                      validate={required()}
                    >
                      <FileField source="url" title="fileName" />
                    </FileInput>
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
