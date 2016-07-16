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
    <link rel="stylesheet" href="../../css/styles-masonry.css">
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
        <div class="col-md-3" id="last-news">
            <jsp:include page="../jspf/news-last.jspf"/>
        </div>
        <div class="col-md-9" id="news">
            <jsp:include page="../jspf/news.jspf"/>
        </div>
    </div>
</div>

<jsp:include page="../jspf/footer.jspf"/>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="../../js/bootstrap.min.js"></script>
<script src="../../js/salvattore.min.js"></script>
<script src="../../js/ajax.js" type="text/javascript"></script>
<script src="../../js/comeback.js" type="text/javascript"></script>
<script src="../../js/star.js" type="text/javascript"></script>
</body>

</html>
