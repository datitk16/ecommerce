import { CustomerProfile } from './customerProfile.model';

export interface Customer {
  message: string;
  token: string;
  user: CustomerProfile;
}
