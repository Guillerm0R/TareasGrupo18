package edu.ar.model;

import edu.ar.data.PeliculaDAO;

public class testconexion {

    public static void main(String[] args) {
        PeliculaDAO dao = new PeliculaDAO();
        
        System.out.println(dao.obtener());
    }
}
