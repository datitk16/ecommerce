
import { environment } from '../../environments/environment';

export class Constants {
  static BASE_API_URL = environment.baseUrl + 'api/';
  static AUTH_URL = Constants.BASE_API_URL + 'users';

}
