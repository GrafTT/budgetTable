import React, { Component } from "react";
import "./App.css";
import TableHead from "./components/TableHead/TableHead";
import Row from "./components/Row/Row";
import Buttons from "./components/Buttons/Buttons";

class App extends Component {
  constructor() {
    super();
    this.state = {
      rowsList: [{ inc: 0 }],
      rowData: [],
    };
    this.addRow = this.addRow.bind(this);
    this.total = this.total.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  addRow() {
    this.setState({ rowsList: this.state.rowsList.concat({ inc: 20 }) });
  }

  deleteRow(i) {
    this.state.rowsList.splice(i, 1);
    this.setState({ rowsList: this.state.rowsList });
  }

  total() {
    return this.state.rowsList
      .map(obj => obj.inc)
      .reduce((a, b) => +a + Number(b), 0);
  }

  render() {
    console.log(this.state.rowsList);
    return (
      <div className="app">
        <TableHead total={this.total} />

        {this.state.rowsList.map((row, i) => {
          return <Row key={i} row={row} i={i} deleteRow={this.deleteRow} />;
        })}

        <Buttons addRow={this.addRow} />
      </div>
    );
  }
}

export default App;
