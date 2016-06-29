package com.github.mykhalechko.slownews.logic;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by vector on 30.06.2016.
 */
@WebServlet("/CurrentDateServlet")
public class CurrentDateServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        Date dNow = new Date();
        SimpleDateFormat ft = new SimpleDateFormat("dd.MM.yyy");
        out.println(ft.format(dNow));

    }
}
