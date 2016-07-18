package com.github.mykhalechko.slownews.servlets;

import com.github.mykhalechko.slownews.beans.User;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/register")
public class RegisterServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        List<User> users;

        if (request.getServletContext().getAttribute("users") == null) {
            users = new ArrayList<>();
        } else {
            users = (List<User>) request.getServletContext().getAttribute("users");
        }

        User user = new User();
        user.setLogin(request.getParameter("login"));
        user.setEmail(request.getParameter("email"));
        user.setPassword(request.getParameter("password"));

        users.add(user);

        request.getServletContext().setAttribute("user", user);
        request.getServletContext().setAttribute("users", users);
        response.sendRedirect("hello");
    }


    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String nextJsp = "/WEB-INF/jsp/register.jsp";
        RequestDispatcher dispatcher = getServletContext().getRequestDispatcher(nextJsp);
        dispatcher.forward(request, response);
    }
}
