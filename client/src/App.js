import React, { Component } from "react";
import "./App.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Table } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.arrange = this.arrange.bind(this);
    this.state = { show: 0, hasData: 0 };
  }

  componentDidMount() {
    console.log("hhh");
  }

  arrange(data) {
    var words = [];
    var d = [];
    console.log("Sorting");
    if (data.length > 0) {
      // words = data.split(",");
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
        this.setState({ result: out, show: 1 }, () => {
          console.log("JSON Ready");
        });
      }
    }
    // this.setState({ grid: d, show: 1 }, () => {
    //   console.log("grid set");
    // });
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
              <Label for="elements">Enter your words</Label>
              <Input
                type="text"
                name="elements"
                placeholder="apple,orange,grapes"
                onChange={e =>
                  this.setState({
                    data: e.target.value.split(","),
                    master: e.target.value.split(","),
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

          <Table>
            <tbody>
              {this.state.show
                ? this.state.result.map((e, idx) => (
                    <tr>
                      <td>
                        <Button
                          onClick={e => {
                            const filtered=this.state.master.splice(
                              this.state.master.indexOf(e.c1),
                              1
                            );
                            console.log(filtered)
                            this.setState(
                              {
                                master:filtered
                              },
                              () => {
                                console.log(this.state.master);
                                this.arrange(this.state.master);
                              }
                            );
                          }}
                        >
                          {e.c1} {idx}
                        </Button>
                      </td>
                      <td>
                        <Button>
                          {e.c2} {idx}
                        </Button>
                      </td>
                      <td>
                        <Button>
                          {e.c3} {idx}
                        </Button>
                      </td>
                      <td>
                        <Button>
                          {e.c4} {idx}
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
