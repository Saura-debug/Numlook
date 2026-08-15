import SearchBar from "../components/lookup/SearchBar";
import ResultCard from "../components/lookup/ResultCard";
import EmptyState from "../components/lookup/EmptyState";
import LookupSkeleton from "../components/lookup/LookupSkeleton";
import LookupError from "../components/lookup/LookupError";
import { useEffect } from "react";

import { useLookup } from "../hooks/useLookup";

export default function Lookup() {
  const lookupMutation = useLookup();

  

useEffect(() => {
  console.log("LOOKUP DATA CHANGED");
  console.dir(lookupMutation.data?.data?.phoneNumber, { depth: null });
}, [lookupMutation.data]);

  return (
    <div className="space-y-6">

      <SearchBar
        onSearch={(phone) =>
          lookupMutation.mutate(phone)
        }
        isLoading={lookupMutation.isPending}
      />

      {!lookupMutation.data &&
        !lookupMutation.isPending &&
        !lookupMutation.error && (
          <EmptyState />
        )}

      {lookupMutation.isPending && (
        <LookupSkeleton />
      )}

      {lookupMutation.error && (
        <LookupError
          message="Phone lookup failed."
        />
      )}

      {lookupMutation.data && (
        <ResultCard
          result={lookupMutation.data.data}
        />
      )}

    </div>
  );
}