let p1 = {id : "1", nombre: 'Elden Ring', precio : 60, stock : 40, brand : 'Novedad',description : 'Levántate, y déjate guiar por la gracia para blandir el poder del Elden Ring', url : 'https://cdn.cdkeys.com/265x265/media/catalog/product/5/d/5de6658946177c5f23698932_24_.jpg'}
let p2 = {id : "2", nombre: 'Sea Of Thieves', precio : 40, stock : 62, brand : 'Novedad', description : 'Iza las velas, hazte a la mar y vive la vida pirata que siempre has soñado', url : 'https://cdn.cdkeys.com/265x265/media/catalog/product/h/e/hero_8_.jpg'}
let p3 = {id : "3", nombre: 'Pokemon Sword', precio : 50, stock : 32, brand : 'Novedad', description : 'Embárcate en una nueva aventura RPG con Pokémon Sword',url : 'https://cdn.cdkeys.com/265x265/media/catalog/product/p/o/pokemon-sword-cd-keys-discount.jpg'}
let p4 = {id : "4", nombre: 'God Of War', precio : 50, stock : 8, brand : 'Novedad', description : 'Entra en el reino nórdico. Viaja a un mundo oscuro de temibles criaturas.', url : 'https://cdn.cdkeys.com/265x265/media/catalog/product/e/g/egs_godofwar_santamonicastudio_s2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1.jpg'}
let p5 = {id : "5", nombre: 'Rimworld', precio : 30, stock : 24, brand : 'Novedad', description : 'RimWorld es un simulador de colonias de ciencia ficción', url : 'https://cdn.cdkeys.com/265x265/media/catalog/product/r/i/rimworld_pc.jpg'}
let p6 = {id : "6", nombre: 'DayZ', precio : 40, stock : 36, brand : 'Novedad', description : 'Mecánica de supervivencia compleja y auténtica.', url : 'https://cdn.cdkeys.com/265x265/media/catalog/product/h/e/header_10_18_.jpg'}
let p7 = {id : "7", nombre: 'Gears of War', precio : 60, stock : 8, brand : 'Novedad', description : 'Experimenta el juego que lanzó una de las sagas más célebres del entretenimiento', url : 'https://cdn.cdkeys.com/265x265/media/catalog/product/h/e/hero_10_.jpg'}
let p8 = {id : "8", nombre: 'Hollow Knight', precio : 18, stock : 24, brand : 'Novedad', description : 'Prepárate para forjar tu propio camino en un mundo épico al estilo de Metroidvania!', url : 'https://cdn.cdkeys.com/265x265/media/catalog/product/h/k/hk.jpg'}


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
                reject("El sistema hizo BUMM, sorry")
            }
        }, delay);
    });
  return (promesa)
}

export default Products;
