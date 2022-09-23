
let totalCarrito = document.getElementById("totalCarrito");
let precioTotal = 0;
totalCarrito.innerHTML = `${precioTotal} €`;

//Declaramos el objeto

let objetos = [
    {
        id: "libro",
        precio: 15
    },
    {
        id: "bateria",
        precio: 8000
    },
    {
        id: "inves",
        precio: 650000
    }
];



const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);

    // console.log("arrastrando...", ev.target.id);
};

const allowDrop = (ev) => {
    ev.preventDefault();
};

const drop = (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    // ev.target.appendChild(document.getElementById(data));
    
    let objetoDeseo = objetos.find(objeto => {
        return objeto.id == data
    });

    precioTotal += objetoDeseo.precio;

    totalCarrito.innerHTML = `${precioTotal} €`;
};