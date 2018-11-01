import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { createMuiTheme } from "@material-ui/core/styles";
import CustomerIcon from "@material-ui/icons/Group";
import BankIcon from "@material-ui/icons/AccountBalance";
import Customer from "./UserList";
import Dashboard from "./Dashboard";
import Bank from "./BankList";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#ff4400"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffffff"
    }
    // error: will use the default color
  }
});

const dataProvider = jsonServerProvider(
  "https://my-json-server.typicode.com/dickyputra09/json-server"
);

const App = () => (
  <Admin theme={theme} dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource name="customer" list={Customer} icon={CustomerIcon} />
    <Resource name="bank" list={Bank} icon={BankIcon} />
  </Admin>
);

export default App;
