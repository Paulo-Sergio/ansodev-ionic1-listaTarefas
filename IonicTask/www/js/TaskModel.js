//construtor
function getTasks(){

  this.items = [
    {nome: 'Item 01', finalizada: false},
    {nome: 'Item 02', finalizada: false},
    {nome: 'Item 01', finalizada: false}
  ];

  this.remove = function(item){
    var pos = this.items.indexOf(item);
    this.items.splice(pos, 1);
  };

  this.add = function(item){
    this.items.push(item);
  };

}
