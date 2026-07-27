import { type HistoryItem } from "../../types/history.types";
import HistoryRow from "./HistoryRow";

interface Props {
  items: HistoryItem[];
}

export default function HistoryTable({ items }: Props) {
  return (
    <table className="w-full border rounded-lg overflow-hidden">

      <thead>

        <tr>

          <th>Phone</th>

          <th>Carrier</th>

          <th>Country</th>

          <th>Line Type</th>

          <th>Searched At</th>

        </tr>

      </thead>

      <tbody>

        {items.map(item => (

          <HistoryRow
            key={item.id}
            item={item}
          />

        ))}

      </tbody>

    </table>
  );
}