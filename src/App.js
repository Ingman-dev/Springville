// in src/App.js
import * as React from "react";
import { AdminContext } from "react-admin";
import { dataProvider, authProvider } from "./client";
import { Resources } from "./resources";

const App = () => (
  <AdminContext dataProvider={dataProvider} authProvider={authProvider}>
    <Resources />
  </AdminContext>
);
export default App;
