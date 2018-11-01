import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

import './App.css';


const styles = theme => ({
  root: {
    "width": "100%",
    "maxWidth": 360,
    "margin-top": "10%",
    "margin-left": "25%"
  },
  input: {
    "name": "todoInput",
    "margin": "5%",
    "width": "75%",
    "font-size": 20,
  },
  list: {
    backgroundColor: "#ffb3b3"
  },
  label: {
    "font-size": 50,
    "font-style": "bold",
    "color": "#ffb3b3",
    "backgroundColor": "white",
    "margin": "30%"
  }
});

class TodoList extends React.Component {
  constructor(){
    super();
    this.state={
      inputValue: '',
      todos: [],
      checked: [0],
      
    }
  }

  render() {
    const { classes } = this.props;
    const { todos } = this.state;
    return (
      <div className={classes.root}>
        <label className={classes.label}> todos </label>
        <input className={classes.input}
          type="text"
          placeholder=""
          ref = {((input)=>{this.textInput=input})}
          value={this.state.value}
          onChange={ inputValue => this._handleOnChange(inputValue) }
          onKeyPress={this._handleOnKeyPres}
        
        />
        <List className={classes.list}>
          {todos.map(value => (
            <ListItem
              key={value}
              role={undefined}
              dense
              button
              onClick={this.handleToggle(value)}
            >
              <Checkbox
                checked={this.state.checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                color="black"
              />
              <ListItemText primary={`${value + 1}`} />
              <ListItemSecondaryAction />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
  _handleOnKeyPress(event){
    event.preventDefault(event); 
    if(event.key === 'Enter'){

    }
  }
  _handleOnChange(event) {
    //const { value } = event.target;  
     //if (event.keyCode === 13) {     
       //this.setState({
         //todos : [...this.state.todos, value], 
         //inputValue: event.target.value
      //}); 
     //}

     //this.setState({inputValue : event.target.value})
     console.log("handle on change çalıştı")
  }

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

}

TodoList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TodoList);
