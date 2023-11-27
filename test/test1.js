import {Coche, listarCoches, anyadirCoche} from '../js/gestionCoches.js';

describe("Lógica de la aplicación (3 puntos)", function() {

    it("Función 'Coche' devuelve objeto coche si los parámetros son correctos", function() {
        var marca = "Seat";
        var color = "blanco";
        var fecha = "2022-11-24T10:00Z";
        var coche = new Coche(marca, color, fecha);
        assert.equal(Coche.prototype.isPrototypeOf(coche), true, "No has utilizado una función constructora para crear el objeto");
        assert.equal(coche.marca, marca, "El objeto creado no incluye marca.");
        assert.equal(coche.color, color, "El objeto creado no incluye color.");
        assert.equal(coche.fechaMatricula, 1669284000000, "El objeto creado no almacena la fecha de manera correcta.");
        assert.equal(coche.mostrarFechaMatricula(), "24/11/2022", "La función 'mostrarFechaMatricula' del objeto creado no funciona.");
    });

    it("Función 'listarCoches' devuelve un array vacío si no hay coches (valor por defecto)", function() {
        assert.isEmpty(listarCoches());
    });

    it("Funciones anyadirCoche y listarCoches", function() {
        assert.isEmpty(listarCoches(), "No has inicializado la lista de coches.");
        var c1marca = "c1marca";
        var c1color = "c1color";
        var c1fecha= "2022-11-24T10:00Z";
        var c2marca = "c2marca";
        var c2color = "c2color";
        var c2fecha= "2022-05-26T10:00Z";
        var c1 = new Coche(c1marca, c1color, c1fecha);
        var c2 = new Coche(c2marca, c2color, c2fecha);
        anyadirCoche(c1);
        assert.lengthOf(listarCoches(), 1);
        anyadirCoche(c2);
        assert.lengthOf(listarCoches(), 2);
        assert.equal(listarCoches()[0].marca, c1marca, "El objeto creado no incluye marca.");
        assert.equal(listarCoches()[0].color, c1color, "El objeto creado no incluye color.");
        assert.equal(listarCoches()[0].fechaMatricula, 1669284000000, "El objeto creado no almacena la fecha correctamente.");
        assert.equal(listarCoches()[0].mostrarFechaMatricula(), "24/11/2022", "La función 'mostrarFechaMatricula' no funciona correctamente.");
        assert.equal(listarCoches()[1].marca, c2marca, "El objeto creado no incluye marca.");
        assert.equal(listarCoches()[1].color, c2color, "El objeto creado no incluye color.");
        assert.equal(listarCoches()[1].fechaMatricula, 1653559200000, "El objeto creado no almacena la fecha correctamente.");
        assert.equal(listarCoches()[1].mostrarFechaMatricula(), "26/5/2022", "La función 'mostrarFechaMatricula' no funciona correctamente.");

    });
});
