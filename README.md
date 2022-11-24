# Cómo funciona la programación del e-commerce



## Principales views
El e-commerce posee 3 vistas principales:

#### ItemListContainer: 
es la vista principal. 
Se accede a ella por la ruta "/".
Muestra todos los productos.



#### ItemDetailCointainer:
Se accede a ella por la ruta "/item/:itemId"
Muestra el detalle de un item en específico.


#### Cart:
Se accede a ella por la ruta "/cart"
Muestra el detalle de la compra: los productos seleccionados, sus cantidades, precios y precio final. 
Posee un formulario que genera una orden que es almacenada en la base de datos (Firebase), con los datos de la compra y datos del usuario ingresados a través del formulario. 


## Flujo de datos

#### Browser Router y useParams
A través del hook useParams, podemos acceder a las rutas dinámicas establecidas en el Browser Router (:categoryId & :itemId). 
De esa manera, en la vista ItemListContainer utilizamos una función (getProducts), que realiza un filtro para solo mostrar los productos pertenecientes a la categoría elegida (guitars, basses y drums). 
En la vista ItemDetailContainer, la función para filtrar el item elegido se denomina getItem. 
Ambas funciones están dentro de un hook useEffect, que aguarda a que la ruta dinámica se monte para realizar las modificaciones en la vista general. 
La ruta dinámica obtiene su valor específico (su categoría o su item ID) a través de links. 
Los links de categorías están definidos en el componente NavBar, a través del uso del elemento Link.
Los links de items Id están definidos en cada card de Item mostrada en el ItemListContainer, a través del elemento useNavigate().

#### Cart Context
El uso del componente context nos permite compartir valores entre distintos componentes de una manera ágil. 
Para ello, todos los demás componentes de App.js son envueltos por el componente CartProvider. Esto nos permite enlazar los datos a un contexto común (cartContext), para de ese modo definir funciones que manipularán esos datos. 
Allí se definen diversas funciones: 
- addProduct: nos permite agregar productos al carrito (se utiliza en ItemDetailContainer)
 - removeProduct : nos permite quitar productos del carrito (utilizada en Cart.jsx)
 - getTotalPrice : utiliza el metodo reduce para sumar el precio total de los productos en el carrito (en Cart.jsx)
 - emptyCart: vacía el carrito una vez finalizada la compra (en Cart.jsx)
 - getCartQty: utiliza el metodo reduce para mostrar la cantidad de items de distinto ID ingresados al carrito (en NavBar.jsx).
 Y lo más importante, en cartContext se define el state cart, que permitirá realizar todas las funciones anteriores.


