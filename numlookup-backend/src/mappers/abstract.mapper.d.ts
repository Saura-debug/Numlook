import { AbstractApiResponse } from "../types/abstract-api.types";
export declare function mapAbstractResponse(data: AbstractApiResponse): {
    valid: boolean;
    lineType: string;
    carrier: string;
    mcc: string | null;
    mnc: string | null;
    internationalFormat: string | null;
    nationalFormat: string | null;
    country: string | null;
    countryCode: string | null;
    countryPrefix: string | null;
    region: string | null;
    city: string | null;
    timezone: string | null;
    smsDomain: string | null;
    smsEmail: string | null;
    lineStatus: string | null;
    isVoip: boolean;
    riskLevel: string | null;
    disposable: boolean | null;
    abuseDetected: boolean | null;
};
//# sourceMappingURL=abstract.mapper.d.ts.map