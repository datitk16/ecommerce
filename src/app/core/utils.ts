import { HttpRequest } from '@angular/common/http';


export class Utils {

  static addValuesToHeader(request: HttpRequest<any>, token: string): HttpRequest<any> {
    let headers = request.headers.set("Authorization", `Bearer ${token}`);
    headers = headers.set("CurrentTimezone", Utils.currentTimezone().toString());
    return request.clone({ headers });
  }

  static currentTimezone(): number {
    return -(new Date()).getTimezoneOffset() / 60;
  }

}
