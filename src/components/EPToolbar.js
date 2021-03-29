import * as React from "react";
import { Toolbar } from "react-admin";

export const EPToolbar = (formProps) => {
  return (
    <Toolbar
      record={formProps.record}
      basePath={formProps.basePath}
      undoable={true}
      invalid={formProps.invalid}
      handleSubmit={formProps.handleSubmit}
      handleSubmitWithRedirect={formProps.handleSubmitWithRedirect}
      saving={formProps.saving}
    />
  );
};
