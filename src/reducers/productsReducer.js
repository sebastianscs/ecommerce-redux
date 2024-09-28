import chopper from "../assets/tshirt-choppa.jpeg";
import luffy from "../assets/tshirt-luffy.jpeg";
import zoro from "../assets/tshirt-zoro.jpeg";
import yonkos from "../assets/tshirt-yonkos.jpeg";
import cat from "../assets/tshirt-cat.jpeg";
import drake from "../assets/tshirt-drake.jpeg";
import eyes from "../assets/tshirt-eyesblue.jpeg";
import green from "../assets/tshirt-green.jpeg";
import heart from "../assets/tshirt-heart.jpeg";
import yugi from "../assets/tshirt-yugi.jpeg";

const initialState = [
    {id:1, name:"Camisa Chopper", price:180, image:chopper},
    {id:2, name:"Camisa Luffy", price:210, image:luffy},
    {id:3, name:"Camisa Zoro", price:200, image:zoro},
    {id:4, name:"Camisa Yonkous", price:220, image:yonkos},
    {id:5, name:"Camisa Cat Bus", price:185, image:cat},
    {id:6, name:"Camisa Dragon", price:150, image:drake},
    {id:7, name:"Camisa Dragon Ojos Azules", price:190, image:eyes},
    {id:8, name:"Camisa Olla de La Codicia", price:160, image:green},
    {id:9, name:"Camisa Corazon", price:175, image:heart},
    {id:10, name:"Camisa Yu-Gi-Oh", price:180, image:yugi},
    {id:11, name:"Camisa Chopper", price:180, image:chopper},
    {id:12, name:"Camisa Luffy", price:210, image:luffy},
    {id:13, name:"Camisa Zoro", price:200, image:zoro},
    {id:14, name:"Camisa Yonkous", price:220, image:yonkos},
    {id:15, name:"Camisa Cat Bus", price:185, image:cat},
    {id:16, name:"Camisa Dragon", price:150, image:drake},
    {id:17, name:"Camisa Dragon Ojos Azules", price:190, image:eyes},
    {id:18, name:"Camisa Olla de La Codicia", price:160, image:green},
    {id:19, name:"Camisa Corazon", price:175, image:heart},
    {id:20, name:"Camisa Yu-Gi-Oh", price:180, image:yugi},
];

const productReducer = (state = initialState, action) => {
    
    switch (action.type) {
        default: 
            return state;
    }
}

export default productReducer;
