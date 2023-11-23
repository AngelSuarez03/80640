package mx.uv;

import static spark.Spark.*;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        String[] informacion = new String[2];
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

        post("/crear", (rq,rs) -> {
            String param = rq.body();
            JsonParser parser = new JsonParser();
            JsonElement arbol = parser.parse(param);
            
               informacion[0] = arbol.getAsJsonObject().get("nombre").toString();
               informacion[1] = arbol.getAsJsonObject().get("apellido").toString();

               JsonObject respuesta = new JsonObject();

               respuesta.addProperty("Nombre: ", informacion[0]);
               respuesta.addProperty("Apellido: ", informacion[1]);

            return respuesta;
        });

        get("/recuperar", (rq,rs) -> {
            return "Usuario almacenado: Nombre: '" + informacion[0] + "' Apellido: '" + informacion[1] + "'";
        });

        put("/modificar", (rq,rs) -> {
            String param = rq.body();
            JsonParser parser = new JsonParser();
            JsonElement arbol = parser.parse(param);
            
            informacion[0] = arbol.getAsJsonObject().get("nombre").toString();
            informacion[1] = arbol.getAsJsonObject().get("apellido").toString();

            return "Informacion Modificada";
        });

        delete("/eliminar", (rq,rs) -> {
            informacion[0] = "";
            informacion[1] = "";
            return "Informacion eliminada";
        });

    }
}
