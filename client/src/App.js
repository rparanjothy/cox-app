import React, { Component } from "react";
import "./App.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { TransitionTimeouts } from "reactstrap/lib/utils";

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
      words = data.split(",");
      words = words.sort();
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
    }
    this.setState({ grid: d, show: 1 }, () => {
      console.log("grid set");
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
              <Label for="elements">Enter your words</Label>
              <Input
                type="text"
                name="elements"
                placeholder="apple,orange,grapes"
                onChange={e =>
                  this.setState({ data: e.target.value, hasData: 1 })
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
          {this.state.show ? (
            <div>
              
              {this.state.grid[0].map(e=><div>{e}</div>)} 
              {this.state.grid[1]}
              {this.state.grid[2]}
              {this.state.grid[3]}

              
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
