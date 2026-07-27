import { useState } from "react";

import { useHistory } from "../hooks/useHistory";

import HistoryTable from "../components/history/HistoryTable";

import Pagination from "../components/history/Pagination";

import LookupSkeleton from "../components/lookup/LookupSkeleton";

export default function History() {

  const [page, setPage] = useState(1);

  const { data, isPending } = useHistory(page);

  if (isPending) {
    return <LookupSkeleton />;
  }

  if (!data) {
    return (
      <p>No history found.</p>
    );
  }

  return (
    <div className="space-y-6">

      <HistoryTable
        items={data.data}
      />

      <Pagination
        page={data.page}
        totalPages={data.totalPages}
        onChange={setPage}
      />

    </div>
  );
}