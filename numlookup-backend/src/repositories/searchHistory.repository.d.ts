declare class SearchHistoryRepository {
    getUserHistory(userId: string, page: number, limit: number): Promise<{
        history: ({
            phoneLookup: {
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
            };
        } & {
            id: string;
            searchedAt: Date;
            userId: string;
            phoneLookupId: string;
        })[];
        total: number;
    }>;
}
declare const _default: SearchHistoryRepository;
export default _default;
//# sourceMappingURL=searchHistory.repository.d.ts.map