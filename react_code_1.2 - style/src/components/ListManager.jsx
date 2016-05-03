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

        var value = !e.target.value ? '': e.target.value.toUpperCase();
        
        
        this.setState({ newItemText: value, items: this.state.items });
    },
    
    render: function() {
        var divStyle= {
            marginTop:"10px"
        };
        
        var headingStyle = {};
        var panelStyle = {};
        
        if (this.props.headingColor){
            headingStyle.background = this.props.headingColor;
            panelStyle.borderColor = this.props.headingColor;
        }
        
        

        
        return (
            <div style={divStyle} className="col-sm-4">
                <div className="panel panel-primary" style={panelStyle} >
                    <div style={headingStyle} className="panel-heading">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <form onSubmit={this.handleSubmit}>
                                <div className="col-sm-9" >
                                    <input className="form-control" type="text" onChange={this.handleChange} value={this.state.newItemText}></input>
                                </div> 
                                <div className="col-sm-2" >
                                    <button className="btn btn-primary">Add</button>
                                </div> 
                            </form>
                        </div>
                        <div className="row">
                            <List items={this.state.items} />
                        </div>
                    </div>
                </div>
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