import React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";

const Customer = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="age" />
    </Datagrid>
  </List>
);

export default Customer;
