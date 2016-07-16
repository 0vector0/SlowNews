package com.github.mykhalechko.slownews.servlets;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by vector on 16.07.2016.
 */

@WebServlet("/home")
public class HomeServlet extends HttpServlet {



    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String name = "test";
        int age = 30;
        int random = (int) (Math.random()*100);
        request.setAttribute("name", name);
        request.setAttribute("age", age);
        request.setAttribute("random", random);

        if (request.getSession().getAttribute("random") == null) {
            request.getSession().setAttribute("random", random);
        }

        List<String> catsList = new ArrayList<>();
        catsList.add("Вася");
        catsList.add("Петя");
        catsList.add("Саша");

        request.setAttribute("catsList", catsList);

        String nextJsp = "/WEB-INF/jsp/home.jsp";
        RequestDispatcher dispatcher = getServletContext().getRequestDispatcher(nextJsp);
        dispatcher.forward(request, response);
    }
}
