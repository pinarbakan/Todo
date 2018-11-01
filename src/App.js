import React, { Component } from 'react';
//import PropTypes from "prop-types";


class App extends Component {

    state = {
        todos: [],
        data: ''
      };

    constructor(props){
      super(props);
      this._handleOnChange= this._handleOnChange.bind(this);
      //this._handleEnter= this._handleEnter.bind(this);
      this._handleSubmit= this._handleSubmit.bind(this);
    }

    componentDidUpdate()
    {
        console.log("Update Finish:", this.state);
    }   

    render() {

      return (
        <div>
          <form onSubmit={this._handleSubmit}>
          <input
            onChange= {this._handleOnChange} 
            value={this.state.data}
          />
          </form>
          <hr></hr>
            <ul>
                {
                    this.state.todos.map(todo => {
                        return(<li key={todo}>{todo} - <button onClick={(e) => e.preventDefault()}>X</button></li>)
                    })
                }
            </ul>
        </div>
      );
      }

  _handleOnChange = (event) => {
    this.setState({
        data : event.target.value
      });
    }

  _handleSubmit (event) {
        event.preventDefault();
        console.log('Form gitti');

        this.setState({
            todos: [...this.state.todos, this.state.data]
        });

        this.setState({
            data : ''
          });
    }
 }
  
 /*App.propTypes = {
    todos: PropTypes.array.isRequired
  };*/
  
  export default App;