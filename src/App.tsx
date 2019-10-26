import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./Table";
import data from "./data.json";

export interface myProps {
  tableData: {
    table: {
      head: [];
      body: [];
    };
  };
}
export interface State {
  hello: String;
}
export class App extends React.Component<myProps, State> {
  static defaultProps = {
    country: "Hello everyone!",
    tableData: data
  };
  constructor(props: myProps) {
    super(props);
    this.state = { hello: "Mohamed Asheik P" };
  }
  render() {
    return (
      <div>
        <Table {...this.props.tableData} />
      </div>
    );
  }
}
export default App;
