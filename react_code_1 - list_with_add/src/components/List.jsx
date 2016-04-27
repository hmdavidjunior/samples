var React = require('react');
var ListItem = require('./ListItem.jsx');

var __dataList = [];

var List = React.createClass({
    render: function() {
        /*var listItems = __dataList.map(x => <ListItem key={x.id} text={x.text} />)
       
        

        return (
            <article>
                <h2>News Article</h2>
                <div>
                    <input type="text" ></input>
                    <input type="button" value="Add" onclick="{console.log(123)}" ></input>
                </div>
                <ul>{listItems}</ul>
            </article>
        );*/
        
        var createItem = function (item){
            return <ListItem key={item.id} text={item.text} />
        }
        
        return (
            <ul>{this.props.items.map(createItem)}</ul>
        );
        
    }/*,
    
    addIngredient: function (name) {
        __dataList.push({'id':__dataList.length+1, 'text':name});
        console.log(name);
    },
    
    test : function () {
        alert(1);
    }*/
});

module.exports = List;