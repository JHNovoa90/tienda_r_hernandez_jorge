let p1 = {id : "1", name: 'Elden Ring', category : 'PC', price : 60, stock : 18, brand : 'E-GAMEPROJECT',description : 'Levántate, y déjate guiar por la gracia para blandir el poder del Elden Ring', TopVentas : true, url : 'https://cdn.cdkeys.com/265x265/media/catalog/product/5/d/5de6658946177c5f23698932_24_.jpg'}
let p2 = {id : "2", name: 'Sea Of Thieves', category : 'XBOX', price : 40, stock : 14, brand : 'E-GAMEPROJECT', description : 'Iza las velas, hazte a la mar y vive la vida pirata que siempre has soñado', TopVentas : false, url : 'https://cdn.cdkeys.com/265x265/media/catalog/product/h/e/hero_8_.jpg'}
let p3 = {id : "3", name: 'Pokemon Sword', category : 'Nintendo', price : 50, stock : 32, brand : 'E-GAMEPROJECT', description : 'Embárcate en una nueva aventura RPG con Pokémon Sword', TopVentas : false, url : 'https://cdn.cdkeys.com/265x265/media/catalog/product/p/o/pokemon-sword-cd-keys-discount.jpg'}
let p4 = {id : "4", name: 'God Of War', category : 'Playstation', price : 50, stock : 8, brand : 'E-GAMEPROJECT', description : 'Entra en el reino nórdico. Viaja a un mundo oscuro de temibles criaturas', TopVentas : true, url : 'https://cdn.cdkeys.com/265x265/media/catalog/product/e/g/egs_godofwar_santamonicastudio_s2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1.jpg'}
let p5 = {id : "5", name: 'Rimworld', category : 'PC', price : 30, stock : 24, brand : 'E-GAMEPROJECT', description : 'RimWorld es un simulador de colonias de ciencia ficción', TopVentas : false, url : 'https://cdn.cdkeys.com/265x265/media/catalog/product/r/i/rimworld_pc.jpg'}
let p6 = {id : "6", name: 'DayZ', category : 'PC', price : 40, stock : 36, brand : 'E-GAMEPROJECT', description : 'Mecánica de supervivencia compleja y auténtica', TopVentas : false, url : 'https://cdn.cdkeys.com/265x265/media/catalog/product/h/e/header_10_18_.jpg'}
let p7 = {id : "7", name: 'Gears of War', category : 'XBOX', price : 60, stock : 8, brand : 'E-GAMEPROJECT', description : 'Experimenta el juego que lanzó una de las sagas más célebres del entretenimiento', TopVentas : true, url : 'https://cdn.cdkeys.com/265x265/media/catalog/product/h/e/hero_10_.jpg'}
let p8 = {id : "8", name: 'Hollow Knight', category : 'Nintendo', price : 18, stock : 24, brand : 'E-GAMEPROJECT', description : 'Prepárate para forjar tu propio camino en un mundo épico al estilo de Metroidvania', TopVentas : true, url : 'https://cdn.cdkeys.com/265x265/media/catalog/product/h/k/hk.jpg'}

let products = [];
products.push(p1);
products.push(p2);
products.push(p3);
products.push(p4);
products.push(p5);
products.push(p6);
products.push(p7);
products.push(p8);

const Products = (resolution, delay) => {
    let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (resolution) {
                resolve(products)
            } else {
                reject("Ha habido un error crítico, lo lamentamos")
            }
        }, delay);
    });
  return (promesa)
}

export default Products;
