package mx.uv;

import static spark.Spark.*;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        get("/",
            (rq, rs) -> "<h1>Hola Mundo!</h1>");
        get("/ruta1",
            (rq, rs) -> "<h1>Adios Mundo!</h1>");
        get("/ruta2",
            (rq, rs) -> "<h1>Que tal Mundo!</h1>");
        get("/ruta3",
            (rq, rs) -> "{'alumno':'jhon','matricula':'s001','carrera':'tc'}");
    }
}
