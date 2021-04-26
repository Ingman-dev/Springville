// in src/App.js
import * as React from "react";
import { AdminContext } from "react-admin";
import { dataProvider } from "./client";
import { Resources } from "./resources";

const App = () => (
  <AdminContext dataProvider={dataProvider} >
    <Resources />
  </AdminContext>
);
export default App;
// authProvider, authProvider={authProvider}