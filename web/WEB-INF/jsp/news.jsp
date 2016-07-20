<%@ taglib prefix='c' uri='http://java.sun.com/jsp/jstl/core' %>
<div class="row">
    <div class="col-md-12" id="center">
        <div class="row masonry-index" data-columns>

            <c:forEach items="${articles}" var="article">

                <div class="short-article item">
                    <div class="thumbnail">
                        <p class="text-right article-img">
                            <button class="btn btn-link" type="submit">
                                <span class="glyphicon glyphicon-star-empty"></span>
                            </button>
                            <img src="${article.getPicture()}" alt="" class="img-responsive">
                        </p>
                        <div class="caption">
                            <p class="text-right"><span class="badge">15.06.2016</span></p>
                            <h3><a href="article">${article.getHeader()}</a></h3>
                            <p><strong>${article.getShortDescription()}</strong></p>
                            <hr>
                            <p>${article.getFullDescription()}</p>
                            <a href="#" class="btn btn-success">
                                Read more <i class="glyphicon glyphicon-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </c:forEach>

        </div>
    </div>
</div>