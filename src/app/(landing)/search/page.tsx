"use client";
import SearchBar from "@/components/SearchBar";
import PageTitle from "@/components/ui/PageTitle";
import { useState } from "react";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="h-screen">
      <PageTitle title="Search scores" className="mb-8" />
      <div className="flex flex-col items-center justify-center p-4">
        <SearchBar onSearch={setSearchQuery} />
        {searchQuery && (
          <p className="mt-4 text-lg">
            Searching for: <strong>{searchQuery}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default Page;
