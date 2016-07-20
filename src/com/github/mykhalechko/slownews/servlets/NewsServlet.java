package com.github.mykhalechko.slownews.servlets;

import com.github.mykhalechko.slownews.beans.Article;
import com.github.mykhalechko.slownews.logic.ArticlesManager;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/news")
public class NewsServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        List<Article> articles = new ArrayList<>();

        articles.add(ArticlesManager.getArticleById(1));
        articles.add(ArticlesManager.getArticleById(1));
        articles.add(ArticlesManager.getArticleById(1));
        articles.add(ArticlesManager.getArticleById(1));

        request.getServletContext().setAttribute("articles", articles);

        this.getServletContext().getRequestDispatcher("/WEB-INF/jsp/news.jsp").
                include(request, response);
    }
}
