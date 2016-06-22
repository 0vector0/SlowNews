<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>
    <title>Calculator</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">

</head>
<body>
<div class="container">
    <div class="content">
        <header>Calculator</header>
        <div class="content-text">
            <div class="calc">
                <form>
                    <p>
                        <label>Choice operation<br>
                            <input type="radio" name="operation" value="add" checked>+
                            <input type="radio" name="operation" value="sub">-
                            <input type="radio" name="operation" value="mult">*
                            <input type="radio" name="operation" value="div">/
                        </label>
                    </p>
                    <p>
                        <label for="first">First number</label>
                        <input required type="text" id="first" name="first" placeholder="input first number" autofocus>
                    </p>
                    <p>
                        <label for="second">Second number</label>
                        <input required type="text" id="second" name="second" placeholder="input second number">
                    </p>
                    <p>
                        <input type="button" id="getResult" value="Get Result">
                    </p>
                    <p>
                    <div id="calculatorAjaxResponse"></div>
                    <%--<output name="result">--%>
                    <%--<jsp:include page="CalculatorServlet"/>--%>
                    <%--</output>--%>
                    </p>
                </form>
            </div>
        </div>
    </div>
    <div class="left-column">
        <h3 class="menu-title">Меню</h3>
        <nav class="menu">
            <ul>
                <li><a href="index.jsp">Index</a></li>
                <li><a href="calculator.jsp">Calculation</a></li>
                <li><a href="404.html">404</a></li>
            </ul>
        </nav>
    </div>
    <div class="right-column">
        <p>
            Right-Column
        </p>
    </div>
</div>

<script src="js/jquery-1.11.1.js" type="text/javascript"></script>
<script src="js/calculator-ajax.js" type="text/javascript"></script>

</body>
</html>