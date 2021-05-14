import * as React from "react";
import {
  TextInput,
  FormWithRedirect,
  DateInput,
  FileInput,
  SimpleForm,
  FileField,
} from "react-admin";
import { Box } from "@material-ui/core";
import { EPToolbar } from "../components/EPToolbar";

export const FormsForm = (props) => {
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
                    <TextInput source="formNo" fullWidth />
                  </Box>
                  <Box flex={1} ml="0.5em">
                    <TextInput source="title" label="Name" fullWidth />
                  </Box>
                  <Box flex={1} ml="0.5em">
                    <TextInput source="tag" label="tag" fullWidth />
                  </Box>
                </Box>
                <Box display="flex">
                  <Box flex={1} mr="0.5em">
                    <TextInput source="type" label="type" fullWidth />
                  </Box>
                  <Box flex={1} ml="0.5em">
                    <TextInput
                      source="organisation"
                      label="organisation"
                      fullWidth
                    />
                  </Box>
                </Box>
                <Box display="flex">
                  <Box flex={1} mr="0.5em">
                    <TextInput source="url" label="url" fullWidth />
                  </Box>
                  <Box flex={1} ml="0.5em"></Box>
                </Box>
                <Box display="flex">
                  <Box flex={1} mr="0.5em"></Box>
                  <Box flex={1} ml="0.5em"></Box>
                </Box>
                <Box display="flex">
                  <Box flex={1} mr="0.5em">
                    <DateInput
                      source="publish.from"
                      label="published from"
                      fullWidth
                    />
                    <Box flex={1} ml="0.5em">
                      <DateInput
                        source="publish.to"
                        label="published to"
                        fullWidth
                      />{" "}
                    </Box>
                  </Box>
                </Box>
                <Box display="flex">
                  <Box flex={1} mr="0.5em">
                    <SimpleForm>
                      <FileInput
                        source="pdfFile"
                        label="Upload file (.pdf)"
                        accept=".pdf"
                        multiple={true}
                      >
                        <FileField source="src" title="title" />
                      </FileInput>
                    </SimpleForm>{" "}
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
