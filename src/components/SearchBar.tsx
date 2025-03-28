"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [isError, setIsError] = useState(false);

  const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  const searchHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (/^\d{8}$/.test(query)) {
        setIsError(false);
        onSearch(query);
        setQuery("");
      } else {
        setIsError(true);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="relative w-full max-w-md">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />
        <Input
          type="text"
          placeholder="Enter registration number... (e.g. 01000xxx)"
          value={query}
          onChange={valueChangeHandler}
          onKeyDown={(e) => searchHandler(e)}
          className={`pl-10 border rounded-lg h-12 ${
            isError ? "border-red-500" : "border-gray-300"
          }`}
        />
      </div>
      {isError && (
        <p className="mt-2 text-sm text-red-500">
          A valid registration number must be 8 digits long.
        </p>
      )}
    </div>
  );
}
