// in src/App.js
import * as React from "react";
import { AdminContext } from "react-admin";
import { authProvider, dataProvider} from "./client";
import { Resources } from "./resources";
import  addUploadFeature  from "./client/dataProvider"


const App = () => (
  <AdminContext dataProvider={addUploadFeature(dataProvider)} authProvider={authProvider}>
    <Resources />
  </AdminContext>
);
export default App;
