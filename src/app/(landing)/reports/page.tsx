"use client";
import BarChart from "@/components/BarChart";
import PageTitle from "@/components/ui/PageTitle";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SUBJECTS } from "@/constants";
import { getScoreStats } from "@/services/scoreService";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Page = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>("toan");

  const { data } = useQuery({
    queryKey: ["reports", selectedSubject],
    queryFn: () => getScoreStats(selectedSubject),
    enabled: !!selectedSubject,
  });

  return (
    <div className="h-full flex flex-col px-4 md:px-6 py-4">
      <PageTitle title="Reports" />

      {/* Dropdown Section */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-md">
        <label className="text-gray-700 font-medium">Select Subject:</label>
        <Select onValueChange={setSelectedSubject}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Select subjects" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Subject</SelectLabel>
              {Object.keys(SUBJECTS).map((key: string) => (
                <SelectItem value={key} key={key}>
                  {SUBJECTS[key as keyof typeof SUBJECTS]}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Chart Section */}
      <div className="flex-1 flex items-center justify-center w-full mt-6">
        {data ? (
          <div className="w-full max-w-3xl">
            <BarChart data={data} />
          </div>
        ) : (
          <p className="text-gray-500">Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default Page;
