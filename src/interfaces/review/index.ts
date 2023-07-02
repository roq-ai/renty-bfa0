import { UserInterface } from 'interfaces/user';
import { PropertyInterface } from 'interfaces/property';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  rating: number;
  comment?: string;
  user_id?: string;
  property_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  property?: PropertyInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  comment?: string;
  user_id?: string;
  property_id?: string;
}
