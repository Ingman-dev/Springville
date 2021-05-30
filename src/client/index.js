import { restClient } from "ra-data-feathers";
import  app  from "./restClient";
import { authClient } from "./authClient";

const restClientOptions = {
  id: "_id", // In this example, the database uses '_id' rather than 'id'
  usePatch: true, // Use PATCH instead of PUT for updates
  users: {
    // Options for individual resources can be set by adding an object with the same name. Optional.
    id: "_id", // If this specific table uses an id field other than 'id'. Optional.
  },
  organisations: {
    id: "alias"
  },

  
};



const dataProvider = restClient(app, restClientOptions );
const authProvider = authClient(app, {});


export  { dataProvider, authProvider };
