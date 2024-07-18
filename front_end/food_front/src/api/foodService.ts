import { foodHttp } from '@/api/foodHttp';
import { mockIngredients } from '@/mock/mockIngredients'; // 导入假数据

const useMockData = true; // 设置为true以使用假数据
export default {
  getFoods() {
    if (useMockData) {
      console.log(mockIngredients); // 打印假数据
      return Promise.resolve({ data: mockIngredients });
    } else {
      return foodHttp.get('/ingredient/all') // 替换为你的API端点
        .then(response => {
          console.log(response.data); // 打印获取的数据
          return response;
        })
        .catch(error => {
          console.error('Error fetching ingredients:', error); // 打印错误信息
          throw error;
        });
    }
  },
  // 获取关联食材
  getLinkedIngredients(ingredient1:string, ingredient2:string) {
    const requestData = { ingredient1:ingredient1, ingredient2:ingredient2 };
    console.log('Sending JSON:', JSON.stringify(requestData)); // 打印将要发送的 JSON 格式
    return foodHttp.post('/recipes/associate',JSON.stringify(requestData) ) // 替换为你的API端点
      .then(response => {
        console.log(response.data); // 打印获取的数据
        return response;
      })
      .catch(error => {
        console.error('Error fetching linked ingredients:', error); // 打印错误信息
        throw error;
      });
  }
}
