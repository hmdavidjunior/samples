var calculator = require('./calculator');
var colors = require('colors');

console.log( "Add " + calculator.add(2,3) );
console.log( "Subtract " + calculator.subtract(2,3) );
console.log( "Multiply " + calculator.multiply(2,3) );
console.log( "Divide " + calculator.divide(2,3) );
console.log( "" );

console.log(colors.yellow("First some yellow text"));
console.log(colors.yellow.underline("Underline that text"));
console.log(colors.red.bold("Make it bold and red"));
console.log(colors.rainbow("Double Raindows All Day Long"))
console.log(colors.trap("Drop the bass"))
console.log(colors.rainbow(colors.trap("DROP THE RAINBOW BASS")));

console.log(colors.bold.italic.underline.red('Chains are also cool.')); // styles not widely supported


console.log(colors.green('So ') + colors.underline('are') + ' ' + colors.inverse('inverse') + colors.yellow.bold(' styles! ')); // styles not widely supported
console.log(colors.zebra("Zebras are so fun!"));
console.log("This is " + colors.strikethrough("not") + " fun.");


console.log(colors.black.bgWhite('Background color attack!'));
console.log(colors.random('Use random styles on everything!'))
console.log(colors.america('America, Heck Yeah!'));

console.log('Setting themes is useful')


console.log('AAAAAAAAAAAAAA');