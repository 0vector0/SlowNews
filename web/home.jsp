<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>Title</title>
</head>
<body>

<p>Name <%= request.getAttribute("name") %> </p>
<p>Age <%= request.getAttribute("age") %> </p>
<p>Random number <%= request.getAttribute("random") %> </p>
<p>session <%= session.getAttribute("random")%></p>

<p>Random number ${random}</p>
<p>Random number (session) ${sessionScope.get("random")}</p>

    <c:forEach items="${catsList}" var="cat">
        <p>${cat}</p>
    </c:forEach>

</body>
</html>


