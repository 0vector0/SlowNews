<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>Customers</title>
</head>
<body>


<form name="test" method="post" action="/customers">
    <p>firstName<br>
        <input type="text" id="firstName" name="firstName">
    </p>
    <p>lastName<br>
        <input type="text" id="lastName" name="lastName">
    </p>
    <p>sum<br>
        <input type="number" id="sum" name="sum">
    </p>
    <p>
        <input type="submit" value="Send">
    </p>
</form>

<p>
    <c:forEach items="${customers}" var="customer">
<p>${customer}</p>
</c:forEach>
</p>
</body>
</html>
