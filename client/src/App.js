import React, { Component } from "react";
import "./App.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Table } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.arrange = this.arrange.bind(this);
    this.removeElement = this.removeElement.bind(this);
    this.state = { show: 0, hasData: 0, done: 0 };
  }

  arrange(x) {
    var data = [...x];
    var words = [];
    var d = [];
    console.log("Inside Arrange");
    console.log(`master - ${this.state.master}`);

    console.log("Sorting");
    if (data.length > 0) {
      var words = data;
      words = words.sort();
      this.setState({ words }, () => {
        console.log("words set");
      });
      console.log(words);

      console.log(words.length);
      // see if it is a multiple of 4
      // get the rows count
      const row = Math.ceil(words.length / 4);
      // log(`Max Row count is ${row}`);

      // log(`Matrix is ${row * 4}`);
      var emptyColCt = row * 4 - words.length;
      var filledColCt = 4 - emptyColCt;
      // log(`Empty column = ${(row*4)-data.length}`)
      // log(`Filled column = ${4-((row*4)-data.length)}`)
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
      this.setState({ show: 0, done: 1 });
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
        <div className="container">
          <Form
            onSubmit={e => {
              e.preventDefault();
              this.arrange(this.state.data);
            }}
          >
            <FormGroup>
              <Label for="elements">
                Enter your words to be sorted and arranged in a nX4 matrix
              </Label>
              <br />
              <Label for="elements">Click a word to remove </Label>

              <Input
                type="text"
                name="elements"
                placeholder="apple orange grapes"
                onChange={e =>
                  this.setState({
                    data: e.target.value.split(" "),
                    master: e.target.value.split(" "),
                    hasData: 1
                  })
                }
              />

              {this.state.hasData ? (
                <div>
                  <Button
                    sz="sm"
                    block
                    onClick={e => this.arrange(this.state.data)}
                  >
                    Arrange
                  </Button>
                </div>
              ) : null}
            </FormGroup>
          </Form>

          {this.state.done ? "All elements removed !!" : null}

          <Table>
            <tbody>
              {this.state.show
                ? this.state.result.map((e, idx) => (
                    <tr>
                      <td>
                        <Button onClick={x => this.removeElement(e.c1)}>
                          {e.c1}
                        </Button>
                      </td>
                      <td>
                        <Button onClick={x => this.removeElement(e.c2)}>
                          {e.c2}
                        </Button>
                      </td>
                      <td>
                        <Button onClick={x => this.removeElement(e.c3)}>
                          {e.c3}
                        </Button>
                      </td>
                      <td>
                        <Button onClick={x => this.removeElement(e.c4)}>
                          {e.c4}
                        </Button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default App;
