import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import { OrganisationsList } from "./organisations.list";
import { OrganisationsCreate } from "./organisations.create";
import { OrganisationsEdit } from "./organisations.edit";
import { MyFromsCreate }  from '../../../myForms/myForms.create';
import { MyFormsList }  from '../../../myForms/myForms.list';
import { MyFormsEdit }  from '../../../myForms/myForms.edit';



export const OrganisationsResource = (permissions) => {
  //name: `organisations/${organisation.alias}/organisations`,
  return {
    name: `organisations`,
    options: { label: "Organisations" },
    icon: BusinessCenterIcon,
    list: OrganisationsList,
    edit: OrganisationsEdit,
    create: OrganisationsCreate,
    
  };
  // return {
  //   name: `organisations/springville-bank/forms-register`,
  //   options: { label: "Organisations" },
  //   icon: BusinessCenterIcon,
  //   list: MyFormsList,
  //   edit: MyFormsEdit,
    
  // };
};
