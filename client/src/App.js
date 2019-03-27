import React, { Component } from "react";
import "./App.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Table, Alert } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.arrange = this.arrange.bind(this);
    this.removeElement = this.removeElement.bind(this);
    this.state = { show: 0, hasData: 0, done: 0 };
    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  arrange(x) {
    /*
    Problem:
    Create an application that accepts words from a user and sorts the words alphabetically into four columns, vertically, then horizontally. 
    The last row should be the only row that contains any empty cells if the number of words are not evenly divisible by 4. 
    */

    /*
    Solution:
    1. based on the length of the words array entered by the user, compute the max number of rows for building a nX4 matrix
    2. Once the rows count is determined, compute the total elements in the matrix, 
    3. Identify the partially filled column counts by subtracting the length of words array from the length of the max elements possisble in the Nx4 matrix
    4. Once the number of partially filled columns are determined, compute the fully filled columns by subtracting the partial column count from 4 (4 is fixed columns count for this problem)
    5. Now, slice the words array to fill the fully filled columns, push to a new array
    6. Then, slice the left overs to fill the partially filled columns, Since the last row is the only one to have missing values/ blanks, reduce the row count by -1 , push to a new array
    7. Transpose the new array and generate a JSON
    8. Render the JSON as a table of buttons
    9. Add a remove element event to the buttons, and as they are removed, refresh the master and arrange again.
    10. When we have removed all the element, set appropriate flags to render alerts
    */
    var data = [...x];
    var words = [];
    var d = [];
    // console.log("Inside Arrange");
    // console.log(`master - ${this.state.master}`);

    console.log("Sorting");
    if (data.length > 0) {
      words = data;
      words = words.sort();
      this.setState({ words }, () => {
        // console.log("words set");
      });

      // see if it is a multiple of 4
      // get the rows count
      const row = Math.ceil(words.length / 4);
      // log(`Max Row count is ${row}`);
      // log(`Matrix size is ${row * 4}`);
      var emptyColCt = row * 4 - words.length;
      var filledColCt = 4 - emptyColCt;

      // log(`emptyColCt = ${emptyColCt}`);
      // log(`filled Col Ct = ${filledColCt}`);

      while (filledColCt) {
        filledColCt -= 1;
        d.push(words.splice(0, row));
        // log(d)
      }

      while (emptyColCt) {
        emptyColCt -= 1;
        //decrement row here, because we are working on partial columns
        d.push(words.splice(0, row - 1));
        // log(d)
      }
      var out = [];
      for (var i = 0; i < row; i++) {
        out.push({ c1: d[0][i], c2: d[1][i], c3: d[2][i], c4: d[3][i] });
      }
      //moved outside the loop
      this.setState({ result: out, show: 1 }, () => {
        console.log("JSON Ready");
        console.log(this.state.result);
      });
    } else {
      // when empty set done to on
      this.setState({ show: 0, done: 1, hasData: 0, txt: "", visible: true,result:{} });

      //reset the text
    }
  }

  removeElement(e) {
    console.log(`Remove Element ${e}`);
    var master = this.state.master;
    master = master.filter(x => x !== e);
    console.log(master);
    this.setState({ master: master, data: master }, () => {
      console.log(`master is now ${this.state.master}`);
      this.arrange(this.state.master);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Sort and Arrange words in an N X 4 matrix - Ramkumar Paranjothy
        </header>
        <div className="container">
          <Form
            onSubmit={e => {
              e.preventDefault();
              this.arrange(this.state.data);
            }}
          >
            <FormGroup>
              <div
                className="problem"
                style={{
                  textAlign: "left",
                  paddingTop: "10px",
                  fontSize: "15px"
                }}
              >
                <b>Problem:</b> Create an application that accepts words from a
                user and sorts the words alphabetically into four columns,
                vertically, then horizontally. The last row should be the only
                row that contains any empty cells if the number of words are not
                evenly divisible by 4.
              </div>

              <Label className="info">
                <b>Instructions</b>
                <ul>
                  <li>
                    Enter your words below to be sorted and arranged in a nX4
                    matrix
                  </li>
                  <li> Click "Arrange" / Enter to arrange </li>
                  <li>Click a word to remove it</li>
                  <li>Click "Reset" to start over</li>
                </ul>
              </Label>
              <Input
                type="text"
                name="elements"
                value={this.state.txt}
                // while entering data, set done to false, hasData to true
                onChange={e => {
                  //validate for text
                  var { value } = e.target;
                  //split only when we have valid text
                  if (value) {
                    this.setState({
                      data: value.trim().split(" "),
                      master: value.trim().split(" "),
                      hasData: 1,
                      done: 0,
                      txt: value
                    });
                  } else {
                    // txtbox is empty hide all buttons, reset everything, wipe off master
                    this.setState({
                      hasData: 0,
                      done: 0,
                      txt: null,
                      show:0,
                      master:[],
                      result:{}
                    });
                  }
                }}
              />

              {this.state.hasData ? (
                <div>
                  <Button
                    style={{ marginTop: "10px" }}
                    sz="md"
                    // block
                    onClick={e => this.arrange(this.state.data)}
                  >
                    Arrange
                  </Button>
                  <Button
                    style={{ marginTop: "10px", marginLeft: "10px" }}
                    sz="md"
                    // block
                    onClick={e =>
                      this.setState({ hasData: 0, txt: "", show: 0 })
                    }
                  >
                    Reset
                  </Button>
                </div>
              ) : null}
            </FormGroup>
          </Form>

          {/* render only when we are out of elements in the array */}
          {this.state.done ? (
            <Alert
              color="danger"
              isOpen={this.state.visible}
              toggle={this.onDismiss}
            >
              All elements removed !!{" "}
            </Alert>
          ) : null}

          {/* Table render */}
          {this.state.hasData ? (
            <Table bordered style={{ width: "70%" }} className="container">
              <tbody>
                {this.state.show
                  ? this.state.result.map((e, idx) => (
                      <tr>
                        <td className="td">
                          {e.c1 ? (
                            <Button onClick={x => this.removeElement(e.c1)}>
                              {e.c1}
                            </Button>
                          ) : null}
                        </td>
                        <td className="td">
                          {e.c2 ? (
                            <Button onClick={x => this.removeElement(e.c2)}>
                              {e.c2}
                            </Button>
                          ) : null}
                        </td>
                        <td className="td">
                          {e.c3 ? (
                            <Button onClick={x => this.removeElement(e.c3)}>
                              {e.c3}
                            </Button>
                          ) : null}
                        </td>
                        <td className="td">
                          {e.c4 ? (
                            <Button onClick={x => this.removeElement(e.c4)}>
                              {e.c4}
                            </Button>
                          ) : null}
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </Table>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
