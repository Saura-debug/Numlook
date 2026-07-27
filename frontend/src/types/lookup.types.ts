export interface LookupRequest {
  phone: string;
}

export interface LookupResponse {
  id: string;

  phoneNumber: string;

  valid: boolean;

  carrier: string | null;

  lineType: string | null;

  country: string | null;

  countryCode: string | null;

  region: string | null;

  city: string | null;

  timezone: string | null;

  isVoip: boolean;

  riskLevel: string | null;

  disposable: boolean;

  smsDomain: string | null;

  smsEmail: string | null;

  lastFetched: string;
}