import { ApplicationInterface } from 'interfaces/application';
import { ReviewInterface } from 'interfaces/review';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PropertyInterface {
  id?: string;
  description: string;
  image?: string;
  location: string;
  price: number;
  bedrooms: number;
  amenities?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  application?: ApplicationInterface[];
  review?: ReviewInterface[];
  user?: UserInterface;
  _count?: {
    application?: number;
    review?: number;
  };
}

export interface PropertyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  location?: string;
  amenities?: string;
  user_id?: string;
}
