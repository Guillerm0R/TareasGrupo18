package edu.ar.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

import com.fasterxml.jackson.databind.ObjectMapper;

import edu.ar.data.PeliculaDAO;
import edu.ar.model.Pelicula;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@WebServlet("/movies")
public class MovieServletController extends HttpServlet {

  static Logger logger = LoggerFactory.getLogger(MovieServletController.class);
  List<Pelicula> movieList = new ArrayList<>();
  ObjectMapper mapper = new ObjectMapper();

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
    String route = req.getParameter("action");
    logger.info("route : " + route);
    switch (route) {
      case "getAll" -> {
        res.setContentType("application/json; charset=UTF-8");
        movieList = PeliculaDAO.obtener();
        logger.info("Dentro de getAll : " + movieList.size());
        mapper.writeValue(res.getWriter(), movieList);
        logger.info(mapper.toString());
      }
      default -> {
        System.out.println("Parámetro no válido");
      }
    }
  }

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
    String route = "add";
    logger.info("Dentro del doPost()");
    logger.info("route : " + route);

    switch (route) {
      case "add" -> {
        try {
          String nombre = req.getParameter("nombre");
          String descripcion = req.getParameter("descripcion");
          String genero = req.getParameter("genero");
          int clasificacion = Integer.parseInt(req.getParameter("clasificacion"));
          int anio = Integer.parseInt(req.getParameter("anio"));
          byte estrellas = Byte.parseByte(req.getParameter("estrellas"));
          String director = req.getParameter("director");

          logger.info("Datos recibidos: {}, {}, {}, {}, {}, {}, {}",
                      nombre, descripcion, genero, clasificacion, anio, estrellas, director);

          Pelicula newMovie = new Pelicula(nombre, descripcion, genero, clasificacion, anio, estrellas, director);

          int registrosInsertados = PeliculaDAO.insertar(newMovie);

          res.setContentType("application/json; charset=UTF-8");
          Map<String, String> response = new HashMap<>();
          if (registrosInsertados > 0) {
            response.put("message", "Película guardada exitosamente!!!");
          } else {
            response.put("message", "Error al guardar la película.");
          }
          mapper.writeValue(res.getWriter(), response);

        } catch (Exception e) {
          logger.error("Error al insertar la película", e);
          res.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
          Map<String, String> response = new HashMap<>();
          response.put("message", "Error al guardar la película.");
          mapper.writeValue(res.getWriter(), response);
        }
      }
    }
  }
}

