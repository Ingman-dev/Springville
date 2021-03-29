import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { VatsList } from "./vats.list";
import { VatsCreate } from "./vats.create";
import { VatsEdit } from "./vats.edit";

export const VatsResource = (permissions) => {
  return {
    name: `vats`,
    options: { label: "Vats" },
    icon: AttachMoneyIcon,
    list: VatsList,
    create: VatsCreate,
    edit: VatsEdit,
  };
};
