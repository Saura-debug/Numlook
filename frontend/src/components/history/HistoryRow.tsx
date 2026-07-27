import {type  HistoryItem } from "../../types/history.types";

interface Props {
  item: HistoryItem;
}

export default function HistoryRow({ item }: Props) {
  return (
    <tr>

      <td>{item.phoneLookup.phoneNumber}</td>

      <td>{item.phoneLookup.carrier}</td>

      <td>{item.phoneLookup.country}</td>

      <td>{item.phoneLookup.lineType}</td>

      <td>
        {new Date(item.searchedAt).toLocaleString()}
      </td>

    </tr>
  );
}