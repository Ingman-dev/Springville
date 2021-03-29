import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import { OrganisationsList } from "./organisations.list";
import { OrganisationsCreate } from "./organisations.create";
import { OrganisationsEdit } from "./organisations.edit";

export const OrganisationsResource = (permissions) => {
  //name: `organisations/${organisation.alias}/organisations`,
  return {
    name: `organisations`,
    options: { label: "Organisations" },
    icon: BusinessCenterIcon,
    list: OrganisationsList,
    create: OrganisationsCreate,
    edit: OrganisationsEdit,
  };
};
