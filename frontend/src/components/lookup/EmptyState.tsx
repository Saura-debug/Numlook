import { Search } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12">
      <Search className="mb-4 h-12 w-12 text-gray-400" />

      <h2 className="text-lg font-semibold">
        Search any phone number
      </h2>

      <p className="mt-2 text-gray-500">
        Enter a US phone number to begin.
      </p>
    </div>
  );
}