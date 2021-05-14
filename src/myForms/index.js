import { MyFormsList }  from './myForms.list';
import { MyFormsEdit }  from './myForms.edit';
import { MyFromsCreate }  from './myForms.create';
import  AssignmentIcon  from '@material-ui/icons/Assignment';
import { OrganisationsList } from "../resources/organisations/organisations/organisations.list"

export const MyFormsResource = (permissions) => {
    
    return {
        name: `organisations/springville-bank/forms-register`,
        options: { label: "My Forms" },
        icon: AssignmentIcon,
        list: MyFormsList,
        edit: MyFormsEdit,
        create: MyFromsCreate,
    }; 
    // return {
    //     name: `Organisations`,
    //     options: { label: "My Forms" },
    //     icon: AssignmentIcon,
    //     list: OrganisationsList,
    //     edit: MyFormsEdit,
    //     create: MyFromsCreate,
    //  }; 
};