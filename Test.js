Drinks = require('./Drinks');
Events = require('events');
Util = require('util');


MyEmit = new Events.EventEmitter();
MyEmit.on('some_event', function(text){
  console.log(text);
});
MyEmit.emit('some_event' , 'Оброботчик собитій');

Util.inherits(Drinks , Events.EventEmitter );

drink = new Array();
for(var i =0; i < 10 ; i++){
drink[i] = new Drinks( i,  i, i);
}
for(var i =0; i < 10 ; i++){
console.log(drink[i].getName(),drink[i].getPrice(),drink[i].getId());
}
