import { UserInterface } from 'interfaces/user';
import { PropertyInterface } from 'interfaces/property';
import { GetQueryInterface } from 'interfaces';

export interface ApplicationInterface {
  id?: string;
  status: string;
  user_id?: string;
  property_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  property?: PropertyInterface;
  _count?: {};
}

export interface ApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  user_id?: string;
  property_id?: string;
}
