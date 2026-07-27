declare class LookupService {
    lookup(phone: string, userId: string): Promise<{
        id: string;
        phoneNumber: string;
        valid: boolean | null;
        lineType: string | null;
        carrier: string | null;
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
        isVoip: boolean | null;
        riskLevel: string | null;
        disposable: boolean | null;
        abuseDetected: boolean | null;
        lastFetched: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
declare const _default: LookupService;
export default _default;
//# sourceMappingURL=lookup.service.d.ts.map