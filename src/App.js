import logo from './logo.svg';
import './App.css';
import { Component, createRef } from 'react';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      output: '',
      inputValue: ''
    };
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  mainFunction = () => {
    let result = this.sandbox();
    this.setState({ output: result });
    this.textInput = createRef();

  }

  sandbox = () => {

    let input = this.state.inputValue;

    // Your code here
    // example: 
    // Sum 10 to the input number:     
    
    let result = parseFloat(input) + 10;

    return result ;
  }


  render() {
    return (
      <div className="App">
        <h1>Sandbox</h1>
        <input type="text" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
        <br /><br />
        <button onClick={this.mainFunction}>Execute</button>
        <br /><br />
        <p id="output" ref="output">{this.state.output}</p>
      </div>
    );
  }
}



export default App;

