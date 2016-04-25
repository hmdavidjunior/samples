var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{'id':1, 'text':'ham2'}, {'id':2, 'text':'cheese'}, {'id':3, 'text':'potatoes'}];

var List = React.createClass({
    render: function() {
        var listItems = ingredients.map(x => <ListItem key={x.id} ingredient={x.text} />)
        //var listItems = ingredients.map(function (x){
        //    return <ListItem key={x.id} ingredient={x.text} />
        //});
        
        return (<ul>{listItems}</ul>);
    }
});

module.exports = List;