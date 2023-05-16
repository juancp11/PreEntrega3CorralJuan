// PRODUCTOS
const productos = [
    // Hamburguesas 
    {
        id: "Hamburguesa 1",
        titulo: "Hamburguesa 1",
        imagen: "./imgenes/burg1.jpg",
        categoria: {
            nombre: "Hamburguesa",
            id: "Hamburguesa"
        },
        precio: 1000
    },
    {
        id: "Hamburguesa 2",
        titulo: "Hamburguesa 2",
        imagen: "./imgenes/burg2.jpg",
        categoria: {
            nombre: "Hamburguesa",
            id: "Hamburguesa"
        },
        precio: 1000
    },
    {
        id: "Hamburguesa 3",
        titulo: "Hamburguesa 3",
        imagen: "./imgenes/burg3.jpg",
        categoria: {
            nombre: "Hamburguesa",
            id: "Hamburguesa"
        },
        precio: 1000
    },
    {
        id: "Hamburguesa 4",
        titulo: "Hamburguesa 4",
        imagen: "./imgenes/burg4.jpg",
        categoria: {
            nombre: "Hamburguesa",
            id: "Hamburguesa"
        },
        precio: 1000
    },

  //Guarniciones 
    
    {
        id: "Papas Fritas",
        titulo: "Papas fritas",
        imagen: "./imgenes/papas fritas1.jpg",
        categoria: {
            nombre: "Guarniciones ",
            id: "Guarniciones "
        },
        precio: 500 
    },

    {
        id: "Papas fritas con cheddar",
        titulo: "Papas fritas con cheddar",
         imagen: "./imgenes/papas-fritas-chedar.jpg",
        categoria: {
            nombre: "Guarniciones ",
            id: "Guarniciones "
        },
        precio: 500 
    },
    
    {
        id: "Papas con cheddar y bacon",
        titulo: "Papas con cheddar y bacon",
        imagen: "./imgenes/papas fritas2.jpg",
        categoria: {
            nombre: "Guarniciones ",
            id: "Guarniciones "
        },
        precio: 500
    },
    
    {
        id: "Aros de cebolla",
        titulo: "Aros de cebolla",
         imagen: "./imgenes/aros de cebolla.jpg",
        categoria: {
            nombre: "Guarniciones ",
            id: "Guarniciones "
        },
        precio: 500
    },
    
    
    
    //bebidas
     /*
    {
        id: "",
        titulo: "",
        imagen: "",
        categoria: {
            nombre: "",
            id: ""
        },
        precio: 
    },

    {
        id: "",
        titulo: "",
        imagen: "",
        categoria: {
            nombre: "",
            id: ""
        },
        precio: 
    },
    
    {
        id: "",
        titulo: "",
        imagen: "",
        categoria: {
            nombre: "",
            id: ""
        },
        precio: 
    },
    
    {
        id: "",
        titulo: "",
        imagen: "",
        categoria: {
            nombre: "",
            id: ""
        },
        precio: 
    },
    
    */
];


//elementos que llamamos del dom
const cargarProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categorias");
const tituloPrincipal = document.querySelector("#titulo-principal");


// 

function cargarProductos(productosElegidos); {

    contenedorProductos.innerHTML = "";

    productos.forEach(producto=> {

        const div =document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen} " alt="${producto.titulo} ">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo} </h3>
            <p class="producto-precio">$${producto.precio} </p>
            <button class="producto-agregar" id="${producto.id} ">Agregar</button>
        </div>
        `

        contenedorProductos.append(div);
    })


}

cargarProductos(productos);


botonesCategorias.forEach(boton =>{
    boton.addEventListener("click", (e)=>{
        
        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");
        
        if(e.currentTarget.id != "todos"){ 
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            
            tituloPrincipal.innerHTML = "Todos los productos"

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else{
            tituloPrincipal.innerHTML = "Todos los productos"
            cargarProductos(productos);
        }

    })
})


















































/*                <div class="producto">
                    <img class="producto-imagen" src="./imagenes/burg1.jpg" alt="">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">Hamburguesa 1</h3>
                        <p class="producto-precio">$100</p>
                        <button class="producto-agregar">Agregar</button>
                    </div>
                </div>
                <div class="producto">
                    <img class="producto-imagen" src="./imgenes/burg2.jpg" alt="">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">Hamburguesa 2</h3>
                        <p class="producto-precio">$100</p>
                        <button class="producto-agregar">Agregar</button>
                    </div>
                </div>
                <div class="producto">
                    <img class="producto-imagen" src="./imgenes/burg3.jpg" alt="">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">Hamburguesa 3</h3>
                        <p class="producto-precio">$100</p>
                        <button class="producto-agregar">Agregar</button>
                    </div>
                </div>
                <div class="producto">
                    <img class="producto-imagen" src="./imgenes/burg4.jpg" alt="">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">Hamburguesa 4</h3>
                        <p class="producto-precio">$100</p>
                        <button class="producto-agregar">Agregar</button>
                    </div>
                </div>
                 
*/