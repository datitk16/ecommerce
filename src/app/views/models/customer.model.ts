import { Type } from 'class-transformer';

export class CustomerItem {
  email: string;
  password: string;
  fullName: string;
  phoneNumber: string;
  userType: string;
  avatar: string;
}

export class Customers {
  @Type(() => CustomerItem)
  items: Array<CustomerItem>;
}
