import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


import {
  lookupSchema,
  type LookupFormData,
} from "../../schemas/lookup.schema";

interface SearchBarProps {
  onSearch: (phone: string) => void;
  isLoading: boolean;
}

export default function SearchBar({
  onSearch,
  isLoading,
}: SearchBarProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LookupFormData>({
    resolver: zodResolver(lookupSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => onSearch(data.phone))}
      className="space-y-4"
    >
      <Input
        placeholder="Enter phone number"
        {...register("phone")}
      />

      {errors.phone && (
        <p className="text-sm text-red-500">
          {errors.phone.message}
        </p>
      )}

      <Button
      type="submit"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? "Searching..." : "Search"}
      </Button>
    </form>
  );
}