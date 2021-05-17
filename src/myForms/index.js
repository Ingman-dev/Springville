import { MyFormsList }  from './myForms.list';
import { MyFormsEdit }  from './myForms.edit';
import { MyFromsCreate }  from './myForms.create';
import  AssignmentIcon  from '@material-ui/icons/Assignment';

export const MyFormsResource = (permissions) => {
    return {
        name: `organisations/springville-bank/forms-register`,
        options: { label: "My Forms" },
        icon: AssignmentIcon,
        list: MyFormsList,
        edit: MyFormsEdit,
        create: MyFromsCreate,
    }; 
};