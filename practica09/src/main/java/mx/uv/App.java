package mx.uv;

import static spark.Spark.*;

/**
 * Hello world!
 *
 */
public class App {
    public static void main(String[] args) {
        options("/*", (request, response) -> {

            String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");

            if (accessControlRequestHeaders != null) {

                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);

            }

            String accessControlRequestMethod = request.headers("Access-Control-Request-Method");

            if (accessControlRequestMethod != null) {
                
                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);

            }

            return "OK";

        });

        before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));
        get("/",
                (rq, rs) -> "<h1>Hola Mundo!</h1>");
        get("/ruta1",
                (rq, rs) -> "<h1>Adios Mundo!</h1>");
        get("/ruta2",
                (rq, rs) -> "<h1>Que tal Mundo!</h1>");
        get("/ruta3",
                (rq, rs) -> "{\"alumno\":\"jhon\",\"matricula\":\"s001\",\"carrera\":\"tc\"}");
    }
}
