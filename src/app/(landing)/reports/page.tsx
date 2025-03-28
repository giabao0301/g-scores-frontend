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

  console.log(data);

  return (
    <div className="h-full flex flex-col px-6">
      <PageTitle title="Reports" />
      <Select onValueChange={setSelectedSubject}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select subjects" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Subject</SelectLabel>
            {Object.keys(SUBJECTS).map((key: string) => {
              return (
                <SelectItem value={key} key={key}>
                  {SUBJECTS[key as keyof typeof SUBJECTS]}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex-1 flex items-center justify-center">
        {data && <BarChart data={data} />}
      </div>
    </div>
  );
};

export default Page;
