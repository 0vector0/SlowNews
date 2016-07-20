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

@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        List<User> users;

        if (request.getServletContext().getAttribute("users") == null) {
            users = new ArrayList<>();
        } else {
            users = (List<User>) request.getServletContext().getAttribute("users");
        }

        String login = request.getParameter("login");
        String password = request.getParameter("password");
        Boolean findUser = false;
        for (User user : users) {
            if (user.getLogin().equalsIgnoreCase(login) && user.getPassword().equalsIgnoreCase(password)) {
//                request.getServletContext().setAttribute("user", user);
                request.getSession().setAttribute("user", user);
                findUser = true;
                response.sendRedirect("index");
            }
        }
        if (!findUser) {
            String errorMessage = "Incorrect username or password";
            request.setAttribute("errorMessage", errorMessage);
            doGet(request, response);
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String nextJsp = "/WEB-INF/jsp/login.jsp";
        RequestDispatcher dispatcher = getServletContext().getRequestDispatcher(nextJsp);
        dispatcher.forward(request, response);
    }
}
