
import { environment } from '../../environments/environment';

export class Constants {
  static BASE_API_URL = environment.baseUrl + 'api/';
  static AUTH_URL = Constants.BASE_API_URL + 'users';
  static PRODUCT_URL = Constants.BASE_API_URL + 'products/';
  static CATEGORIES_URL = Constants.BASE_API_URL + 'categoriesC1';
}
