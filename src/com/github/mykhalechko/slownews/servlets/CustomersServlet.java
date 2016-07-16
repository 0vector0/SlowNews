package com.github.mykhalechko.slownews.servlets;

import com.github.mykhalechko.slownews.beans.Customer;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/customers")
public class CustomersServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        List<Customer> customers;

        if (request.getServletContext().getAttribute("customers") == null) {
            customers = new ArrayList<>();
        } else {
            customers = (List<Customer>) request.getServletContext().getAttribute("customers");
        }

        Customer customer = new Customer();
        customer.setFirstName(request.getParameter("firstName"));
        customer.setLastName(request.getParameter("lastName"));

        customers.add(customer);

        request.getServletContext().setAttribute("customers", customers);
        response.sendRedirect("customers");

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String nextJsp = "/customers.jsp";
        RequestDispatcher dispatcher = getServletContext().getRequestDispatcher(nextJsp);
        dispatcher.forward(request, response);

    }
}
