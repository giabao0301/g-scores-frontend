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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative w-full max-w-md">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        size={20}
      />
      <Input
        type="text"
        placeholder="Enter registration number..."
        value={query}
        onChange={handleSearch}
        className="pl-10 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 h-12"
      />
    </div>
  );
}
