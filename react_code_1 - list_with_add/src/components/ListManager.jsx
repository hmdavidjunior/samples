var React = require('react');
var List = require('./List.jsx');


function isNullOrWhitespace( input ) {
  return !input || !input.trim();
}

var ListManager = React.createClass({

    //initialize properties
    getInitialState: function () {
        return { newItemText:"", items: [] };
    },

    //event handlers
    handleSubmit: function (e){
        e.preventDefault();
        
        this.addItem(this.state.newItemText);
    },
    
    handleChange: function (e){
        e.preventDefault();
        
        //this.state.newItemText = e.target.value;
        //this.setState(this.state);
        
        //console.log(e.target.value +" <> "+ this.state.newItemText);
        
        var value = !e.target.value ? '': e.target.value.toUpperCase();
        
        
        this.setState({ newItemText: value, items: this.state.items });
    },
    
    render: function() {
        return (
            <div className={this.props.className}>
                <h3>{this.props.title}</h3>
                <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.handleChange} value={this.state.newItemText}></input>
                        <input type="submit" value="Add" ></input> 
                </form>
                <List items={this.state.items} />
            </div>
        );
    },
    
    addItem: function (name) {
        if (isNullOrWhitespace(name))
        {
            console.log("Empty value!")
            return;
        }
            
        name = name.trim();
        
        var currentItems = this.state.items;
        
        if (currentItems.findIndex(x => x.text==name)>-1){
            console.log("Already added!");
            return;
        }
        
        
        currentItems.push({'id':currentItems.length+1, 'text': name});
        
        this.setState({ newItemText:"", items: currentItems });
    }

});

module.exports = ListManager;