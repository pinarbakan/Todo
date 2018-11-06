import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
//import PropTypes from "prop-types";


const styles = theme => ({
    root: {
      "width": "100%",
      "margin-top": "10%"
    },
    input: {
      "margin": "2%",
      "width": "95%",
      "font-size": 20,
    },
    label: {
      "font-size": 50,
      "font-style": "bold",
      "color": "#ffb3b3",
      "backgroundColor": "white",
      "margin": "40%"
    },
    list: {
        "backgroundColor": "#ffb3b3"
    },
    button: {
        "backgroundColor": "black",
        "color": "#ffb3b3"
    }
  });

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos   : [],
            data    : ''
        };
    }

    componentDidUpdate() {
        console.log("Update Finish:", this.state);
    }   

    render() {
      const { classes } = this.props;

      return (
        <div className= { classes.root }>
            <form onSubmit={ this._handleSubmit.bind(this) } >
                <label className={ classes.label }> S4B todos </label>
                <input className={ classes.input }
                    onChange={ this._handleOnChange.bind(this) } 
                    value={ this.state.data }
                />
            </form>
          
            <List className={classes.list}>
                {this.state.todos.map(todo => {
                    return (
                        <div>
                            <div>
                                <ListItem
                                    key={ todo.id } 
                                    onClick={ this._handleToggle.bind(this, todo.id) }
                                >
                                    <Checkbox
                                        checked={ todo.checked }
                                        color= "default"
                                    />
                                    <ListItemText primary={ todo.name } />
                                </ListItem>
                            </div>
                            <div>
                                <button 
                                    onClick={ this._handleDelete.bind(this, todo.id) }
                                    color="default"> DELETE
                                </button>
                            </div>
                        </div>
                    );
                })}
            </List>
        </div>);
    }

    _handleOnChange = (event) => {
        this.setState({
            data : event.target.value,           
        });
    }

    _handleSubmit (event) {
        event.preventDefault();

        const newItem = this.state.data;
        
        if(newItem){
            this.setState({
                todos: [...this.state.todos,
                        {
                            id: this._createRandomKeyValue(),
                            name: newItem,
                            checked: false
                        }
                    ],
                data : ''
            });
        }        
    }

    _handleToggle(todoId) {
        const { todos } = this.state;
        const selectedTodo = todos.find(todo => todo.id === todoId);
        const filteredTodos = todos.filter(todo => todo.id !== todoId);

        let orderedTodos = [
            ...filteredTodos,
            {
                id: selectedTodo.id,
                name: selectedTodo.name,
                checked: !selectedTodo.checked
            }
        ].sort((todo1, todo2) => (todo1.id > todo2.id) ? 1 : ((todo2.id> todo1.id) ? -1 : 0));
        this.setState({
            todos: [...orderedTodos]
        });
    };
   
    _handleDelete(todoId) {
        // verilen id dışında kalan diğer tümü
        const newTodos = this.state.todos.filter(todo => todo.id !== todoId);

        this.setState({
            todos: [...newTodos]
        });
    }    

    _createRandomKeyValue() {
        return Date.now();
    }
} 

  
  export default withStyles(styles)(App);
