export interface AbstractApiResponse {
  valid: boolean;
  type: string;
  carrier: string;

  carrier_data?: {
    mobile_country_code?: string;
    mobile_network_code?: string;
    sms_domain?: string;
    sms_email?: string;
  };

  format?: {
    international?: string;
    local?: string;
  };

  country?: {
    name?: string;
    code?: string;
    prefix?: string;
  };

  location?: string;
  city?: string;
  timezone?: string;
  connection?: string;

  security?: {
    risk_level?: string;
    is_disposable?: boolean;
    is_abuser?: boolean;
  };
}