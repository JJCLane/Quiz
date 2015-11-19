<!DOCTYPE html>
<html ng-app="todoApp">

    <head>

        <title>Quiz</title>
        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
        <link href="/css/style.css" rel="stylesheet" type="text/css">

    </head>

    <body>

        <div class="container">

            <h1>Shane and Jordan's Quiz</h1>

            <div id="app">

                @yield("content")

            </div>

        </div><!-- .container -->

        <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.8/vue.js"></script>
        <script src="/js/script.js"></script>

    </body>

</html>
