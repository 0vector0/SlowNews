<%@ page import="com.github.mykhalechko.slownews.logic.Calculator" %><%--
  Created by IntelliJ IDEA.
  User: vector
  Date: 11.06.2016
  Time: 22:04
  To change this template use File | Settings | File Templates.
--%>
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
                <form name="calculation.jsp" method="GET">
                    <p><label>Choise operation<br>
                        <input type="radio" name="operation" value="add" checked>+
                        <input type="radio" name="operation" value="sub">-
                        <input type="radio" name="operation" value="mult">*
                        <input type="radio" name="operation" value="div">/
                    </label>
                    </p>
                    <p>
                        <label for="first">First number</label> <input required type="text" id="first"
                                                                       name="first" placeholder="input first number">
                    </p>
                    <p>
                        <label for="second">Second number</label> <input required type="text" id="second"
                                                                         name="second" placeholder="input second number">
                    </p>
                    <p>
                        <input type="submit" name="sumbit" value="Get Result">
                    </p></form>
                <p>
                        <%
                          if (request.getParameter("operation") != null && request.getParameter("first") != null && request.getParameter("second") != null) {
                         try {
    request.getCharacterEncoding();
    String operation = request.getParameter("operation");
    double first = Double.parseDouble(request.getParameter("first"));
    double second = Double.parseDouble(request.getParameter("second"));
    try {
        double result = new Calculator().getResult(operation, first, second);
         switch (operation) {
                 case "add": {
                 operation = "+";
                 break;
                 }
                 case "sub": {
                 operation = "-";
                 break;
                 }
                 case "mult": {
                 operation = "*";
                 break;
                 }
                 case "div": {
                 operation = "/";
                 break;
         }
         }
        %>

                        <%=first + " " + operation + " " + second + " = " + result%>
                        <%
    } catch (ArithmeticException e) { %>
                        <%="division by zero"%>
                        <%
    }
} catch (NumberFormatException e) { %>
                        <%="invalid number format"%>
                        <%
}
}
%>
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
</body>
</html>
