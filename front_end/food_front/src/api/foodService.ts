import { foodHttp } from '@/api/foodHttp';

export default {
   getFoods() {
    return foodHttp.post('/ingredient/all');
    }
}
