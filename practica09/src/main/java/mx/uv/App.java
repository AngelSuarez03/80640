package mx.uv;

import static spark.Spark.*;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

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
        get("/index.html",
                (rq, rs) -> "<h1>Hola Mundo!</h1>");
        get("/ruta1",
                (rq, rs) -> {
                    System.out.println(rq.queryParams("Password"));
                    System.out.println("Tipo de contenido ruta1: " + rq.contentType());
                    return "<h1>Adios Mundo!</h1>";
                });
        post("/ruta1",
                (rq, rs) -> {
                    System.out.println("Tipo de contenido ruta1: " + rq.contentType());
                    return "<h1>Adios Mundo!" + rq.queryParams("Password") + "</h1>";
                });
        get("/ruta2",
                (rq, rs) -> {
                    String param = rq.queryParams("nombre");
                    String param2 = rq.queryParams("password");
                    System.out.println("Tipo de contenido: " + rq.contentType());
                    JsonObject respuesta = new JsonObject();
                    respuesta.addProperty("Nombre:", param);
                    respuesta.addProperty("Password:", param2);
                    rs.type("application/json");
                    return respuesta;
                });
        post("/ruta2",
                (rq, rs) -> {
                    String param = rq.body();
                    System.out.println("Tipo de contenido: " + rq.contentType());
                    System.out.println("El body tiene: " + param);
                    JsonParser parser  = new JsonParser();
                    //Este objeto sirve para acceder a los elementos de la peticion en json
                    JsonElement arbol = parser.parse(param);
                    
                    //Este objeto sirve para construir la respuesta en json
                    JsonObject respuesta = new JsonObject();
                    respuesta.addProperty("Nombre:", arbol.getAsJsonObject().get("nombre").toString());
                    respuesta.addProperty("Password", arbol.getAsJsonObject().get("password").toString());
                    rs.type("application/json");
                    return respuesta;
                });
        get("/ruta3",
                (rq, rs) -> {
                    System.out.println("Esto es el request: " + rq.ip());
                    rs.type("application/json");
                    System.out.println("Esto es el response: " + rs.raw());
                    return "{\"alumno\":\"jhon\",\"matricula\":\"s001\",\"carrera\":\"tc\"}";
                });
        post("/", (rq, rs) -> "<h1>Soy el post</h1>");
    }
}
