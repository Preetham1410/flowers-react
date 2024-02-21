import axios from "axios";

class CartService {
      
    getCart(){
        return axios.get("http://localhost:8080/api/carts")
    }

    createCart(cart){
        return axios.post("http://localhost:8080/api/carts",cart);
    }

    deleteCart(id){
        return axios.delete("http://localhost:8080/api/carts/"+id)
    }

    deleteAllCart(){
        return axios.delete("http://localhost:8080/api/carts")
    }
}

const cartService = new CartService();
export default cartService;