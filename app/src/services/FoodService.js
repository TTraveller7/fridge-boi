import http from "../http-common";

const getAllFoods = () => {
    return http.get('/foods');
}

const foodService = {
    getAllFoods
};

export default foodService;
