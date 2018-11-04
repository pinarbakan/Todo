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
            data    : '',           
            checked : [],
        };

        this._handleOnChange= this._handleOnChange.bind(this);
        //this._handleEnter= this._handleEnter.bind(this);
        //this._handleSubmit= this._handleSubmit.bind(this);
    }

    componentDidUpdate() {
        console.log("Update Finish:", this.state);
    }   

    render() {
      const {classes}=this.props;

      return (
        <div className= {classes.root}>
          <form onSubmit={this._handleSubmit.bind(this)} >
            <label className={classes.label}> S4B todos </label>
            <input className={classes.input}
                onChange= {this._handleOnChange} 
                value={this.state.data}
            />
          </form>
          
            <List className={classes.list}>
                {this.state.todos.map(value => {
                    
                return (
                    <div>
                        <div>
                            <ListItem
                                key     
                                onClick ={ this.handleToggle(this, value.id) }
                            >
                                <Checkbox
                                    checked={this.state.checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    color= "default"
                                    />
                                <ListItemText primary={ value.name } />
                            </ListItem>
                        </div>
                        <div>
                            <button onClick={this._handleDelete.bind(this, value.id)} color="default"> DELETE </button>
                        </div>
                    </div>);
            })}
        </List>
        </div>
      );
      }

    _handleOnChange = (event) => {
        
        this.setState({
            data : event.target.value,           
        });
    }

    _handleSubmit (event) {
        event.preventDefault();
        const newItem=this.state.data;
        
        if(newItem !== ''){
            this.setState({
                todos: [...this.state.todos, {id:this._createRandomKeyValue(), name: newItem }],
                data : '',
                
            });
        }        
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
    
    _handleDelete(event){
       
        }
        
    

    _createRandomKeyValue() {
       // const capitalLetters    = [ "A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
       // const smallLetters      = [ "a", "b", "c", "d", "e", "f", "g", "h","i", "j", "l", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
       //  const digits            = [ "0", "1", "2", "3", "4", "5", "6", "7","8", "9"];

       // var random= Math.random();
       // key= capitalLetters.random[];
        

        // TODO
        // return a random string

        return Math.floor(Date.now() / 1000);
    }  
} 

 /*App.propTypes = {
    todos: PropTypes.array.isRequired
  };
  */
  
  export default withStyles(styles)(App);