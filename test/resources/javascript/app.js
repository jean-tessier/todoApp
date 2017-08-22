(function () {
    var app = angular.module('todo', []);
    
    app.controller('TodoController', function(){
        this.todoList = todos; 
        
        this.remove = function(toRemove){
        }
    });
    
    app.controller('TodoFormController', function(){
        this.newTodo = '';
        
        this.addTodo = function(todoCtrl){
            todoCtrl.todoList.push(this.newTodo);
            this.newTodo = '';
        };
    });
    
    var todos = [
        "Do",
        "This",
        "Projects"
    ];
})();