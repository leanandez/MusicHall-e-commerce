# Cómo funciona la programación del e-commerce



## Principales views
El e-commerce posee 3 vistas principales:
####ItemListContainer: 
es la vista principal. 
Se accede a ella por la ruta "/".
Muestra todos los productos.



#### ItemDetailCointainer:
Se accede a ella por la ruta "/item/:itemID"
Muestra el detalle de un item en específico.


#### Cart:
Se accede a ella por la ruta "/cart"
Muestra el detalle de la compra: los productos seleccionados, sus cantidades, precios y precio final. 
Posee un formulario que genera una orden que es almacenada en la base de datos (Firebase), con los datos de la compra y datos del usuario ingresados a través del formulario. 


## Flujo de datos

#### Browser Router y useParams
A través del hook useParams, podemos acceder 

