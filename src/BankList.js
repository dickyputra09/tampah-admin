import React from "react";
import { List, Datagrid, TextField } from "react-admin";

const Bank = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
    </Datagrid>
  </List>
);

export default Bank;
