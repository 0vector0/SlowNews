<%--
  Created by IntelliJ IDEA.
  User: vector
  Date: 12.06.2016
  Time: 0:31
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script src="jquery.jscroll.min.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $('#call').click(function () {
                $.ajax({
                    type: "post",
                    url: "some2.jsp", //this is my servlet

                    data: "input=" + $('#ip').val() + "&output=" + $('#op').val(),
                    success: function (msg) {
                        $('#output').append(msg);
                    }
                });
            });

        });
    </script>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>JSP Page</title>
</head>
<body>
<div id="output"></div>
<input type="button" value="Load" name="Load" id="call"/>
</body>
</html>
