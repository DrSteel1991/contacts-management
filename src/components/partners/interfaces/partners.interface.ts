export interface Partner {
  id: number;
  urlName: string;
  organization: string;
  customerLocations: string;
  willWorkRemotely: boolean;
  website: string | null;
  services: string;
  offices: office[];
}

export interface office {
  location: string;
  address: string;
  coordinates: string;
}

export interface MatchedPartner {
  urlName?: string;
  companyName?: string;
  location?: office[];
  dist?: number;
}
