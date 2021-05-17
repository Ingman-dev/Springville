import { useEffect, useState } from "react";
import { AdminUI, Resource, usePermissions } from "react-admin";
import { useSelector } from "react-redux";
import { Dashboard } from "../containers/Dashboard";
import { EPLayout } from "./layout";
import { OrganisationsResource } from "./organisations/organisations";
import { FormsResource } from "../forms";
import { CountriesResource } from "./system/countries";
import { VatsResource } from "./system/vats";
import { MyFormsResource } from "../myForms"


export const Resources = () => {
  const [resources, setResources] = useState([]);
  const organisation = useSelector((state) => state.organisation);
  //const organisation = { alias: "soderberg" };
  const { permissions } = usePermissions();

  useEffect(() => {
    const ret = [];

    if (true || (organisation && organisation.alias)) {
    }
      ret.push(MyFormsResource(permissions));
      ret.push(OrganisationsResource(permissions));
      ret.push(CountriesResource(permissions));
      ret.push(VatsResource(permissions));
      ret.push(FormsResource(permissions));
      setResources(ret);
  }, [organisation, permissions]);

  return (
    <AdminUI dashboard={Dashboard} layout={EPLayout}>
      {resources.map((resource, index) => (
        <Resource key={index} {...resource} />
      ))}
    </AdminUI>
  );
};
