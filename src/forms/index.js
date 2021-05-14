import { FormsList }  from './forms.list';
import  AssignmentIcon  from '@material-ui/icons/Assignment';

export const FormsResource = (permissions) => {
    return {
        name: `forms-register`,
        options: { label: "Forms-register" },
        icon: AssignmentIcon,
        list: FormsList,
     }; 
};