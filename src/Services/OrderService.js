import axios from "axios";

class OrderService {
      
    getOrder(){
        return axios.get("http://localhost:8080/api/orders");
    }

    createOrder(order){
        return axios.post("http://localhost:8080/api/orders",order);
    }
}

const orderService = new OrderService();
export default orderService;