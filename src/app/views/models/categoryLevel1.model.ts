import { Type } from 'class-transformer';

export class CategoryLevel1Item {
  _id: string;
  name: string;
  name_url: string;
  params_types: string;
  type: string;
  icon: string;
}

export class CategoryLevel1 {
  @Type(() => CategoryLevel1Item)
  items: Array<CategoryLevel1Item>;
}
