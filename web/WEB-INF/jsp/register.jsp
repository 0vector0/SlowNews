<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>

<head>

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <title>SlowNews</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="../../css/bootstrap.css">
    <link rel="stylesheet" href="../../css/font-awesome.css">
    <link rel="stylesheet" href="../../css/styles.css">
    <%--<link rel="stylesheet" href="css/styles-masonry.css">--%>
    <link rel="stylesheet" href="../../css/singin.css">

    <link rel="shortcut icon" href="../../img/favicon.ico" type="image/x-icon">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>


<jsp:include page="../jspf/navbar.jspf"/>

<div class="container">
    <div class="row" id="main-content">
        <form class="form-register"  method="post" action="/register">
            <h2 class="form-register-heading">Sign up</h2>
            <label for="inputLogin" class="sr-only">Login</label>
            <input type="text" id="inputLogin" name="login" class="form-control" placeholder="Login" autofocus>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" name="email" class="form-control" placeholder="Email address">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password">
            <label for="confirmPassword" class="sr-only">Confirm password:</label>
            <input type="password" id="confirmPassword" class="form-control" placeholder="Confirm password:">
            <br/>
            <button class="btn btn-lg btn-success btn-block" type="submit">Create an account</button>
        </form>
    </div>
</div>

<jsp:include page="../jspf/footer.jspf"/>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="../../js/bootstrap.min.js"></script>
<script src="../../js/salvattore.min.js"></script>
</body>

</html>
