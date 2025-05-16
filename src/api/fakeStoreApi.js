import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const getAllProducts = async () => {
  return [
    {
      id: 1,
      title: "Alimento Seco para Perros 10kg",
      price: 54.99,
      category: "alimento",
      image:
        "https://nutrican.com.ar/wp-content/uploads/2021/07/mobility-rc.png",
    },
    {
      id: 2,
      title: "Pelota de Goma Reforzada",
      price: 9.99,
      category: "juguetes",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_800700-MLA45295950793_032021-O.webp",
    },
    {
      id: 3,
      title: "Correa Ajustable de Nylon",
      price: 15.5,
      category: "accesorios",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_716021-MLU70623130164_072023-O.webp",
    },
    {
      id: 4,
      title: "Juguete Mordedor de Cuerda",
      price: 7.25,
      category: "juguetes",
      image:
        "https://monococojugueterias.com/cdn/shop/files/MC062.png?v=1717418852&width=1445",
    },
    {
      id: 5,
      title: "Alimento Húmedo Sabor Pollo",
      price: 3.99,
      category: "alimento",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_769438-MLA75610174054_042024-O.webp",
    },
    {
      id: 6,
      title: "Cama Acolchada para Perros",
      price: 39.99,
      category: "descanso",
      image: "https://m.media-amazon.com/images/I/71sYp9HtX5L.jpg",
    },
    {
      id: 7,
      title: "Shampoo para Perros Hipoalergénico",
      price: 12.49,
      category: "higiene",
      image:
        "https://acdn-us.mitiendanube.com/stores/001/130/470/products/greenwood-perros-y-gatos-x500-ml-shampoo-7791274200489-613707e8512da6a6b617079399248862-640-0.png",
    },
    {
      id: 8,
      title: "Collar Reflectante Talla M",
      price: 11.0,
      category: "accesorios",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_885683-MLA47565047631_092021-O.webp",
    },
    {
      id: 9,
      title: "Pelota con Sonido para Mascotas",
      price: 5.99,
      category: "juguetes",
      image:
        "https://www.animalia.com.ar/wp-content/uploads/2019/05/WhatsApp-Image-2019-05-23-at-12.55.24-PM.jpeg",
    },
    {
      id: 10,
      title: "Comedero Doble Antideslizante",
      price: 10.49,
      category: "accesorios",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_935212-MLU78878995951_092024-O.webp",
    },
    {
      id: 11,
      title: "Alimento Seco Premium 15kg",
      price: 64.99,
      category: "alimento",
      image:
        "https://petbaar.vtexassets.com/arquivos/ids/155519/vitalcan-premium-perro-adulto-15-01.jpg?v=638821295444030000",
    },
    {
      id: 12,
      title: "Juguete Dispensador de Golosinas",
      price: 11.95,
      category: "juguetes",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_729442-MLA81953638625_012025-O.webp",
    },
    {
      id: 13,
      title: "Toallitas Húmedas para Mascotas",
      price: 4.75,
      category: "higiene",
      image:
        "https://acdn-us.mitiendanube.com/stores/001/142/477/products/2-890c2ed337ca49abdc17390517885085-1024-1024.jpg",
    },
    {
      id: 14,
      title: "Cama Circular Ultraplush",
      price: 45.99,
      category: "descanso",
      image: "https://images-na.ssl-images-amazon.com/images/I/41tEnDBL3FL.jpg",
    },
    {
      id: 15,
      title: "Alimento Balanceado Sabor Carne 5kg",
      price: 29.99,
      category: "alimento",
      image:
        "https://puppis.vteximg.com.br/arquivos/ids/170503/141002.png?v=637166075006770000",
    },
    {
      id: 16,
      title: "Cepillo Quitapelos para Mascotas",
      price: 6.99,
      category: "higiene",
      image: "https://http2.mlstatic.com/D_722369-MLC52909351737_122022-C.jpg",
    },
    {
      id: 17,
      title: "Juguete Masticable con Textura",
      price: 8.5,
      category: "juguetes",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_868876-MLA80722385465_112024-O.webp",
    },
    {
      id: 18,
      title: "Bebedero Portátil para Paseos",
      price: 9.5,
      category: "accesorios",
      image:
        "https://www.petmarket.com.ar/wp-content/uploads/2023/10/Bebedero-de-Paseo-Botella-x-300ML-2-1.jpg",
    },
    {
      id: 19,
      title: "Juguete Mordedor con Ventosa",
      price: 13.25,
      category: "juguetes",
      image: "https://m.media-amazon.com/images/I/71X7uBEr2BL.jpg",
    },
    {
      id: 20,
      title: "Correa Retráctil Extensible 5m",
      price: 17.8,
      category: "accesorios",
      image:
        "https://www.dd2.com.ar/image/cache/catalog/R%20-%203390/JIME%20-%202025-03-17T141028.557-550x550.png",
    },
    {
      id: 21,
      title: "Bolso de Transporte Ventilado",
      price: 26.4,
      category: "accesorios",
      image:
        "https://http2.mlstatic.com/D_Q_NP_2X_995242-MLC81528214248_012025-T-bolso-transporte-mascotas-talla-l-49x27x28-grande-malla.webp",
    },
    {
      id: 22,
      title: "Alimento Natural Cocido 500g",
      price: 5.0,
      category: "alimento",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_957870-MLA82454839425_022025-O.webp",
    },
    {
      id: 23,
      title: "Shampoo Antipulgas y Garrapatas",
      price: 14.3,
      category: "higiene",
      image:
        "https://http2.mlstatic.com/D_Q_NP_2X_748518-MLA83582334283_042025-T.webp",
    },
    {
      id: 24,
      title: "Manta Acolchada ",
      price: 19.99,
      category: "descanso",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_833664-MLA84038842143_042025-O.webp",
    },
    {
      id: 25,
      title: "Pechera Ergonómica Antitirones",
      price: 20.99,
      category: "accesorios",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_920361-MLA83469768935_042025-O.webp",
    },
    {
      id: 25,
      title: "Bolso de Transporte Ventilado",
      price: 26.4,
      category: "accesorios",
      image:
        "https://product-hub-prd.madeiramadeira.com.br/446779423/images/39045ffe-cbcc-46a4-a193-bbce78e39c5f8522dd332a54f8911045900812.jpg",
    },
    {
      id: 26,
      title: "Alimento Natural Cocido 500g",
      price: 5.0,
      category: "alimento",
      image:
        "https://resources.claroshop.com/medios-plazavip/mkt/5e34d4e224ec1_fl3843-800x800-compressorjpg.jpg",
    },
    {
      id: 27,
      title: "Shampoo Antipulgas y Garrapatas",
      price: 14.3,
      category: "higiene",
      image:
        "https://cdn.awsli.com.br/300x300/1577/1577097/produto/160877739244ef26b02.jpg",
    },
    {
      id: 28,
      title: "Manta Acolchada para Camita",
      price: 19.99,
      category: "descanso",
      image:
        "https://ae01.alicdn.com/kf/S94ae2418e0d84f39ab59c1bcf58a4c44i/Alfombrillas-suaves-para-Cama-de-Gato-manta-c-lida-de-lana-suave-para-mascotas-colch-n.jpg",
    },
    {
      id: 29,
      title: "Vestidos para mascotas",
      price: 20.99,
      category: "accesorios",
      image:
        "https://m.media-amazon.com/images/I/71-xXn+kt9L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 30,
      title: "Snacks Naturales de Pollo 200g",
      price: 6.8,
      category: "alimento",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_616149-MLA70221895616_062023-O.webp",
    },
    {
      id: 31,
      title: "Set de Pelotas Texturizadas",
      price: 9.4,
      category: "juguetes",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_925186-MLU73209862331_122023-O.webp",
    },
    {
      id: 32,
      title: "Kit Higiénico con Pañales Reutilizables",
      price: 24.6,
      category: "higiene",
      image:
        "https://i5.walmartimages.com/asr/e44dea04-7be7-46cd-ba08-5905909e17d9.16cffde3ceeda3e1f52234d5207e0a88.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    },
    {
      id: 33,
      title: "Rascador para Perros Pequeños",
      price: 22.99,
      category: "accesorios",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_737344-MLA54784879908_032023-O.webp",
    },
    {
      id: 34,
      title: "Sillón Ortopédico para Mascotas",
      price: 55.3,
      category: "descanso",
      image:
        "https://acdn-us.mitiendanube.com/stores/003/933/039/products/diseno-sin-titulo-52-f4a563e83cd99778dd17278183403816-1024-1024.png",
    },
    {
      id: 35,
      title: "Alimento Hipoalergénico Cordero 3kg",
      price: 27.75,
      category: "alimento",
      image:
        "https://d2eebw31vcx88p.cloudfront.net/nordenpet1/uploads/8b560e58f49b4925c746b6c68a1e96223c3f086c.jpg.webp",
    },
    {
      id: 36,
      title: "Collar de Cuero con Hebilla Ajustable",
      price: 16.7,
      category: "accesorios",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_707750-MLA84174471310_052025-O.webp",
    },
    {
      id: 37,
      title: "Juguete Interactivo con Espejo",
      price: 7.99,
      category: "juguetes",
      image:
        "https://m.media-amazon.com/images/I/71ixLPDLHcL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 38,
      title: "Alfombra Refrigerante para Verano",
      price: 21.5,
      category: "descanso",
      image:
        "https://http2.mlstatic.com/D_Q_NP_862616-MLA80951343709_112024-O.webp",
    },
    {
      id: 39,
      title: "Spray Neutralizador de Olores",
      price: 8.75,
      category: "higiene",
      image:
        "https://http2.mlstatic.com/D_978029-MLA79177871669_092024-O.jpg",
    },
    {
      id: 40,
      title: "Mochila Transportadora Tipo Burbuja",
      price: 34.95,
      category: "accesorios",
      image:
        "https://www.somoswapp.com.ar/media/catalog/product/cache/4e187a3216125186f353d1ef896e6af4/m/o/mochila_capsula_burbuja_modelo_1.png",
    },
    {
      id: 41,
      title: "Pelota con Luces LED Intermitentes",
      price: 6.99,
      category: "juguetes",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_958236-MLU72482592506_102023-O.webp",
    },
  ];
};
