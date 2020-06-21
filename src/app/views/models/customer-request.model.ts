export class SearchCustomerRequest {
  email: string;
}

export class CreateCustomerRequest {
  email: string;
  password: string;
  fullName: string;
  phoneNumber: string;
  userType: string;
  avatar: string;
}

export class DeleteCustomerRequest {
  id: string;
}
