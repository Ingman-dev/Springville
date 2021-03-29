import LanguageIcon from "@material-ui/icons/Language";
import { CountriesList } from "./countries.list";
import { CountriesCreate } from "./countries.create";
import { CountriesEdit } from "./countries.edit";

export const CountriesResource = (permissions) => {
  return {
    name: "countries",
    options: { label: "Countries" },
    icon: LanguageIcon,
    list: CountriesList,
    create: CountriesCreate,
    edit: CountriesEdit,
  };
};
