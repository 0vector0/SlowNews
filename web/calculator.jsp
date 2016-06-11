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
</head>
<body>

<% try {
    request.getCharacterEncoding();
    String operation = request.getParameter("operation");
    int first = Integer.parseInt(request.getParameter("first"));
    int second = Integer.parseInt(request.getParameter("second"));
    try {
        double result = new Calculator().getResult(operation, first, second);
        response.getWriter().println("<h1>" + result + "</h1>");
    } catch (ArithmeticException e) {
        response.getWriter().println("<h1>division by zero</h1>");
    }
} catch (NumberFormatException e) {
    response.getWriter().println("<h1>invalid number format</h1>");
}
%>

</body>
</html>
