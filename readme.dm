
*Sistema de Registro de Vehículos*

Archivos: autos.ts - motos.ts - camiones.ts - registroAutomotor.ts - main.ts y éste readme.dm -

------------------------------------------------------------------------------------------------
Definición de Clases

Primero, defini tres clases: Auto, Moto y Camion. Las propiedades de estas clases están declaradas
 como privadas, lo que significa que solo pueden ser accedidas dentro de la propia clase.
  Estas propiedades son:
-Marca
-Modelo
-Año
-Puertas (para Auto)
-Cilindrada (para Moto)

Cada clase tiene un constructor que inicializa estas propiedades y métodos de acceso (getters) 
que permiten obtener los valores de estas propiedades de forma controlada, sin permitir la 
modificación directa de los valores.

------------------------------------------------------------------------------------------------
Clase RegistroAutomotor

Luego, creé la clase RegistroAutomotor, que gestiona un arreglo de vehículos. Tiene métodos para:
-Agregar un vehículo
-Obtener todos los vehículos registrados
-Modificar un vehículo existente
-Dar de baja un vehículo
-Buscar un vehículo por marca y modelo*
-Obtener vehículos por marca o modelo*
*Si bien estas dos ultimas no se pedían en el ejercicio, me pareció interesante para mostrar 
qué otras funcionalidades se pueden aplicar.

--------------------------------------------------------------------------------------------------
Funcionalidad

-Se crea una instancia de RegistroAutomotor.
-Se agregan vehículos utilizando agregarVehiculo.
-Se pueden modificar vehículos existentes utilizando modificarVehiculo.
-Se pueden dar de baja vehículos utilizando darDeBaja.
-Se pueden buscar vehículos por marca y modelo utilizando getVehiculo.
-Se pueden obtener vehículos por marca o modelo utilizando getVehiculosPorMarca o
getVehiculosPorModelo.

--------------------------------------------------------------------------------------------------
Ejemplo que utilicé para probar la funcionalidad:

Se crea una instancia de RegistroAutomotor.
Se agregan tres vehículos: un auto, una moto y un camión.
Se muestra el listado de vehículos registrados inicialmente.
Se modifica el auto "Toyota Corolla" cambiando su año a 2022.
Se da de baja la moto "Honda CBR".
Se muestra el listado de vehículos registrados después de cada operación.
---------------------------------------------------------------------------------------------------

En conclusión...
Se me complicó un poco encapsulamiento y composición. 
Pero una vez que lo entendi y los lleve a la practica fue mas sencillo
(mire muchos ejemplos de uso en tutoriales de internet, entonces pude 
darme cuenta cómo aplicarlos a este ejercicio en particular, 
y creo que podría utilizarlo para como base para otros futuros ejercicios).
Me gustó cómo quedó organizado y fácil de entender (al menos para mi).
Estoy satisfecha con el resultado ;)



