import * as React from "react";
import { Create, useNotify, useRedirect } from "react-admin";
import { MyFormsForm } from "./myForms.form";


//onSucess och onFailure med redirect på Create bara. 
export const MyFromsCreate = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();
  const onSuccess = () => {
    notify("Post saved successfully"); 
    redirect("list", props.basePath);
  };
  const onFailure = () => {
    notify("Post was not saved"); 
    redirect("list", props.basePath);
  };
  return (
    <Create {...props} {...props} onSuccess={onSuccess} onFailure={onFailure}>
      <MyFormsForm {...props} />
    </Create>
  );
};
