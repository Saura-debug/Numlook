import { type LookupResponse } from "../../types/lookup.types";
import InfoRow from "./InfoRow";

interface Props {
  result: LookupResponse;
}

export default function ResultCard({
  result,
}: Props) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        Phone Information
      </h2>

      <InfoRow
        label="Phone"
        value={result.phoneNumber}
      />

      <InfoRow
        label="Carrier"
        value={result.carrier}
      />

      <InfoRow
        label="Country"
        value={result.country}
      />

      <InfoRow
        label="Region"
        value={result.region}
      />

      <InfoRow
        label="City"
        value={result.city}
      />

      <InfoRow
        label="Timezone"
        value={result.timezone}
      />

      <InfoRow
        label="Line Type"
        value={result.lineType}
      />

      <InfoRow
        label="VoIP"
        value={result.isVoip ? "Yes" : "No"}
      />

      <InfoRow
        label="Disposable"
        value={result.disposable ? "Yes" : "No"}
      />

      <InfoRow
        label="Risk Level"
        value={result.riskLevel}
      />
    </div>
  );
}