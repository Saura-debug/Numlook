import { AbstractApiResponse } from "../types/abstract-api.types";

export function mapAbstractResponse(data: AbstractApiResponse) {
  return {
    valid: data.phone_validation?.is_valid ?? false,

    lineType: data.phone_carrier?.line_type ?? null,

    carrier: data.phone_carrier?.name ?? null,

    mcc: data.phone_carrier?.mcc?.toString() ?? null,

    mnc: data.phone_carrier?.mnc?.toString() ?? null,

    internationalFormat:
      data.phone_format?.international ?? null,

    nationalFormat:
      data.phone_format?.national ?? null,

    country:
      data.phone_location?.country_name ?? null,

    countryCode:
      data.phone_location?.country_code ?? null,

    countryPrefix:
      data.phone_location?.country_prefix ?? null,

    region:
      data.phone_location?.region ?? null,

    city:
      data.phone_location?.city ?? null,

    timezone:
      data.phone_location?.timezone ?? null,

    smsDomain:
      data.phone_messaging?.sms_domain ?? null,

    smsEmail:
      data.phone_messaging?.sms_email ?? null,

    lineStatus:
      data.phone_validation?.line_status ?? null,

    isVoip:
      data.phone_validation?.is_voip ?? false,

    riskLevel:
      data.phone_risk?.risk_level ?? null,

    disposable:
      data.phone_risk?.is_disposable ?? false,

    abuseDetected:
      data.phone_risk?.is_abuse_detected ?? false,
  };
}