"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapAbstractResponse = mapAbstractResponse;
function mapAbstractResponse(data) {
    return {
        valid: data.valid,
        lineType: data.type,
        carrier: data.carrier,
        mcc: data.carrier_data?.mobile_country_code ?? null,
        mnc: data.carrier_data?.mobile_network_code ?? null,
        internationalFormat: data.format?.international ?? null,
        nationalFormat: data.format?.local ?? null,
        country: data.country?.name ?? null,
        countryCode: data.country?.code ?? null,
        countryPrefix: data.country?.prefix ?? null,
        region: data.location ?? null,
        city: data.city ?? null,
        timezone: data.timezone ?? null,
        smsDomain: data.carrier_data?.sms_domain ?? null,
        smsEmail: data.carrier_data?.sms_email ?? null,
        lineStatus: data.connection ?? null,
        isVoip: data.type === "voip",
        riskLevel: data.security?.risk_level ?? null,
        disposable: data.security?.is_disposable ?? null,
        abuseDetected: data.security?.is_abuser ?? null,
    };
}
//# sourceMappingURL=abstract.mapper.js.map