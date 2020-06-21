export class DeleteRequest {
  id: string;
}


export class SearchProductRequest {
  subject: string;
}


export class CreateProductRequest {
  category_id: string;
  category_id_2: string;
  city_id: string;
  ward_id: string;
  price_string: string;
  phone: string;
  body: string;
  subject: string;
}
