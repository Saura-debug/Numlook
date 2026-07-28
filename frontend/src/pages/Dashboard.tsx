import { Search, History, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2 text-gray-500">
          Welcome to NumLookup. Search phone numbers and view your lookup
          history.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Link
          to="/lookup"
          className="rounded-xl border p-6 shadow-sm transition hover:shadow-md"
        >
          <Search className="mb-4 h-8 w-8 text-blue-600" />

          <h2 className="text-xl font-semibold">Phone Lookup</h2>

          <p className="mt-2 text-sm text-gray-500">
            Search any supported phone number and view detailed information.
          </p>
        </Link>

        <Link
          to="/history"
          className="rounded-xl border p-6 shadow-sm transition hover:shadow-md"
        >
          <History className="mb-4 h-8 w-8 text-green-600" />

          <h2 className="text-xl font-semibold">Search History</h2>

          <p className="mt-2 text-sm text-gray-500">
            View all your previous phone lookups.
          </p>
        </Link>
      </div>

      <div className="rounded-xl border p-6">
        <div className="flex items-center gap-3">
          <Phone className="h-6 w-6 text-blue-600" />

          <h2 className="text-xl font-semibold">
            Quick Overview
          </h2>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-slate-100 p-4">
            <p className="text-sm text-gray-500">Total Searches</p>

            <p className="mt-2 text-3xl font-bold">0</p>
          </div>

          <div className="rounded-lg bg-slate-100 p-4">
            <p className="text-sm text-gray-500">Today's Searches</p>

            <p className="mt-2 text-3xl font-bold">0</p>
          </div>

          <div className="rounded-lg bg-slate-100 p-4">
            <p className="text-sm text-gray-500">Last Lookup</p>

            <p className="mt-2 font-semibold">No searches yet</p>
          </div>
        </div>
      </div>
    </div>
  );
}