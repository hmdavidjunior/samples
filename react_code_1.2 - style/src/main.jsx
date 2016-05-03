var React = require('react');
var ReactDOM = require('react-dom')
var ListManager = require('./components/ListManager.jsx');


var manager1 = ReactDOM.render(<ListManager title="My Ingredients 1" />, document.getElementById('ingredients_1'));

manager1.addItem('Bread');
manager1.addItem('Catchup');

var manager2 = ReactDOM.render(<ListManager title="My Ingredients 2" headingColor="#b31217" />, document.getElementById('ingredients_2'));

manager2.addItem('Bread');
manager2.addItem('Catchup');

/*
var obj = ReactDOM.render(
    <div >
        <ListManager title="My Ingredients 1" className="listManager" />
        <ListManager title="My Ingredients 2" className="listManager" />
    </div>, 
    document.getElementById('ingredients_1')
);

console.log(obj);
*/