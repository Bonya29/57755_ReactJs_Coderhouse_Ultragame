const products = [
    {
        id: 1, 
        titulo: "LEGO Star Wars: Skywalker Saga", 
        categoria: "juegos",
        precio: 30, 
        imagen: "/src/assets/products_img/legostarwars.jpg",
    },
    { 
        id: 2, 
        titulo: "ELDEN RING",
        categoria: "juegos",
        precio: 50, 
        imagen: "/src/assets/products_img/eldenring.jpg",
    },
    { 
        id: 3, 
        titulo: "DRAGON BALL Z: KAKAROT",
        categoria: "juegos",
        precio: 50, 
        imagen: "/src/assets/products_img/dbkakarot.jpg",
    },
    { 
        id: 4, 
        titulo: "Grand Theft Auto V: Edición Premium",
        categoria: "juegos",
        precio: 30, 
        imagen: "/src/assets/products_img/gta5.jpg",
    },
    { 
        id: 5, 
        titulo: "Red Dead Redemption 2",
        categoria: "juegos",
        precio: 60, 
        imagen: "/src/assets/products_img/rdr2.jpg",
    },
    { 
        id: 6, 
        titulo: "Poppy Playtime - Chapter 3",
        categoria: "juegos",
        precio: 10, 
        imagen: "/src/assets/products_img/ppt3.jpg",
    },
    { 
        id: 7, 
        titulo: "Steam Tarjeta de Regalo USD$5",
        categoria: "regalo",
        precio: 5, 
        imagen: "/src/assets/products_img/steam5.png",
    },
    { 
        id: 8, 
        titulo: "Steam Tarjeta de Regalo USD$10",
        categoria: "regalo",
        precio: 10, 
        imagen: "/src/assets/products_img/steam10.png",
    },
    { 
        id: 9, 
        titulo: "Steam Tarjeta de Regalo USD$25",
        categoria: "regalo",
        precio: 25, 
        imagen: "/src/assets/products_img/steam25.png",
    },
    { 
        id: 10, 
        titulo: "Steam Tarjeta de Regalo USD$50",
        categoria: "regalo",
        precio: 50, 
        imagen: "/src/assets/products_img/steam50.png",
    },
    { 
        id: 11, 
        titulo: "Steam 1 Random Grand Key",
        categoria: "random",
        precio: 4, 
        imagen: "/src/assets/products_img/grand1.png",
    },
    { 
        id: 12, 
        titulo: "Steam 5 Random VIP Keys",
        categoria: "random",
        precio: 6, 
        imagen: "/src/assets/products_img/vip5.png",
    },
    { 
        id: 13, 
        titulo: "Steam 5 Random Diamond Keys",
        categoria: "random",
        precio: 5, 
        imagen: "/src/assets/products_img/diamond5.png",
    },
    { 
        id: 14, 
        titulo: "Steam 5 Random Elite Keys",
        categoria: "random",
        precio: 8, 
        imagen: "/src/assets/products_img/elite5.png",
    },
];

export const getProducts = new Promise((resolve) => {
    resolve(products)
})