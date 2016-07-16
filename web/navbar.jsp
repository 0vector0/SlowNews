<%@ page import="com.github.mykhalechko.slownews.servlets.CurrentDateServlet" %>
<div class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index">
                <img src="img/slow-news-logo-new.png" alt="Slow News" class="img-responsive">
            </a>
        </div>
        <div class="navbar-collapse collapse">
            <div class="container">
                <ul class="nav navbar-nav">
                    <li> <a href="index">News</a></li>
                    <li><a href="archive">Archive</a></li>
                    <li><a href="calculator.jsp">Calculator</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="login">Sing in</a>
                    </li>
                    <li>
                        <a href="register">Sign up</a>
                    </li>
                </ul>

            </div>
        </div>
        <!--/.navbar-collapse -->
    </div>
</div>
