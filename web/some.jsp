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
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
    <script type="text/javascript">


        var loading = false;
        $(window).scroll(function(){
            if((($(window).scrollTop()+$(window).height())+250)>=$(document).height()){
                if(loading == false){
                    loading = true;
                    $('#loadingbar').css("display","block");
                    $.get("some2.jsp"+$('#loaded_max').val(), function(loaded){
                        $('body').append(loaded);
                        $('#loaded_max').val(parseInt($('#loaded_max').val())+50);
                        $('#loadingbar').css("display","none");
                        loading = false;
                    });
                }
            }
        });
        $(document).ready(function() {
            $('#loaded_max').val(50);
        });


    /*    $(document).ready(function() {
            $('#call').click(function ()
            {
                $.ajax({
                    type: "post",
                    url: "some2.jsp", //this is my servlet
                    data: "input=" +$('#ip').val()+"&output="+$('#op').val(),
                    success: function(msg){
                        $('#output').append(msg);
                    }
                });
            });

        });*/
    </script>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>JSP Page</title>
</head>
<body>
<div class="content-text">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam ex, gravida sed laoreet in, efficitur
        a
        elit. Quisque vitae nunc ipsum. Integer ac leo viverra, egestas metus id, gravida libero. Aenean tempus
        tortor quis augue facilisis volutpat. Aenean pretium pretium purus, a feugiat nisl ultrices eget. Duis
        vehicula congue pretium. In ultricies justo augue, nec euismod dui imperdiet et. Nullam mi justo,
        euismod et
        diam sed, aliquet pellentesque eros. Vestibulum pulvinar eros ut suscipit condimentum. Cras sit amet
        ligula
        ac sapien egestas aliquam. Integer sit amet accumsan tortor, nec aliquam ipsum. Aenean gravida lobortis
        posuere. Pellentesque lacinia aliquet sem, id tristique tellus congue eget. Nullam condimentum ultricies
        eleifend.
    </p>
    <p><img src="images/learn-java.png" alt="keep calm and learn java" width="20%" class="leftimg">Nulla lacinia
        neque ut bibendum congue. Nunc vitae metus semper, malesuada felis ac, pulvinar arcu.
        Mauris
        gravida mi eu sem varius, mattis maximus tortor faucibus. Phasellus ac mauris quis diam varius commodo.
        Fusce consectetur ante ac justo ullamcorper, non facilisis augue mattis. Ut placerat orci at purus
        aliquet
        commodo. Vivamus lobortis sit amet ipsum in sagittis. Phasellus imperdiet eget sem fringilla maximus.
        Nunc
        efficitur pulvinar rhoncus. Etiam id mattis est.</p>
    <p>Sed eu nibh pellentesque, vulputate augue sit amet, malesuada ipsum. In sed nulla vel metus fringilla
        porta.
        Nulla iaculis blandit diam, et egestas arcu suscipit in. In posuere aliquet massa. Suspendisse in
        molestie
        libero, non varius dolor. Cras blandit dapibus massa eget auctor. Duis commodo ac nibh eu fermentum.
        Curabitur quis orci placerat, ornare velit eget, tempus mauris. Suspendisse consectetur tempus mattis.
        Ut
        vestibulum ante eu ligula vehicula fringilla. Praesent id vulputate diam, nec faucibus ipsum. Sed
        vestibulum
        metus at nisl finibus, in euismod arcu suscipit.</p>
    <p>Aenean ipsum quam, dapibus ut dictum non, pulvinar mollis leo. Nulla fermentum dui at tellus euismod,
        vel
        ullamcorper mi finibus. Praesent mattis, ex nec cursus porta, augue libero luctus risus, vitae ultricies
        quam nibh at neque. Aenean hendrerit turpis erat, non tincidunt ligula accumsan eget. Ut pretium lacinia
        nisi, id accumsan turpis. Integer aliquet faucibus nibh, vel aliquam ipsum fermentum id. Morbi
        consectetur
        purus sed elit bibendum auctor. Curabitur tempus maximus leo sed vehicula. Ut ut porta orci. Maecenas
        vulputate sapien quis tortor aliquam, ut pellentesque nisi pharetra. In risus nibh, lacinia laoreet
        metus
        at, volutpat faucibus neque. Praesent pulvinar vulputate justo, eget tincidunt tortor tincidunt eu.
        Pellentesque quam sapien, porttitor et gravida non, congue id ante.</p>
    <p> AMaecenas eleifend metus id turpis feugiat convallis. Donec at lorem volutpat, faucibus sem auctor,
        vestibulum dolor. Aliquam erat volutpat. Donec bibendum tempus urna, sed sodales mauris aliquam sit
        amet.
        Nullam iaculis consectetur convallis. Nunc sagittis, ipsum ac commodo mollis, urna velit hendrerit
        augue,
        vel lobortis ex velit non orci. Curabitur lacinia ipsum id bibendum dignissim.</p>
</div>
input:<input id="ip" type="text" name="" value="" /><br>
output:<input id="op" type="text" name="" value="" /><br>
<input type="button" value="Call Servlet" name="Call Servlet" id="call"/>

<div id="output"></div>
</body>
</html>
