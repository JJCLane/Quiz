<!DOCTYPE html>
<html ng-app="todoApp">
    <head>
        <title>Laravel</title>
        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
        <link href="/css/app.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <form>
            <select>
                <option value="Single choice question">Single choice question</option>
                <option value="Multiple choice question">Multiple choice question</option>
            </select>
            <div>
                <input type="text" ng-model="yourName" placeholder="Enter a question here">
                <input type="text" ng-model="yourName" placeholder="Enter a question here">
            </div>
            <div>
                <input type="text" ng-model="yourName" placeholder="Enter a question here">
                <input type="text" ng-model="yourName" placeholder="Enter a question here">
            </div>
            
        </form>
        <div ng-controller="TodoListController as todoList">
          <ul class="unstyled">
            <li ng-repeat="todo in todoList.todos">
              <input type="checkbox" ng-model="todo.done">
              <span class="done-@{{todo.done}}">@{{todo.text}}</span>
          </li>
      </ul>
      <form ng-submit="todoList.addTodo()">
        <input type="text" ng-model="todoList.todoText"  size="30"
        placeholder="add new todo here">
        <input class="btn-primary" type="submit" value="add">
    </form>
</div>
        <h1>Hello @{{yourName}}!</h1>
        <script src="/js/all.js"></script>
    </body>
</html>
