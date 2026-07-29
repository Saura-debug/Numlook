export interface AbstractApiResponse {
  phone_number: string;

  phone_format: {
    international: string;
    national: string;
  };

  phone_carrier: {
    name: string;
    line_type: string;
    mcc: number;
    mnc: number;
  };

  phone_location: {
    country_name: string;
    country_code: string;
    country_prefix: string;
    region: string;
    city: string;
    timezone: string;
  };

  phone_messaging: {
    sms_domain: string | null;
    sms_email: string | null;
  };

  phone_validation: {
    is_valid: boolean;
    line_status: string;
    is_voip: boolean;
    minimum_age: number | null;
  };

  phone_registration: {
    name: string | null;
    type: string | null;
  };

  phone_risk: {
    risk_level: string;
    is_disposable: boolean;
    is_abuse_detected: boolean;
  };

  phone_breaches: {
    total_breaches: number | null;
    date_first_breached: string | null;
    date_last_breached: string | null;
    breached_domains: string[];
  };
}