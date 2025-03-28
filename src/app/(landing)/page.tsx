"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GROUPS, SUBJECTS, TOP } from "@/constants";
import { getTopStudents } from "@/services/scoreService";
import { TopStudent } from "@/types/score";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Page() {
  const [selectedGroup, setSelectedGroup] = useState<keyof typeof GROUPS>("A");
  const [limit, setLimit] = useState<string>("10");

  const { data, isLoading } = useQuery({
    queryKey: ["top", selectedGroup, limit],
    queryFn: () => getTopStudents(selectedGroup, parseInt(limit)),
    enabled: !!selectedGroup,
  });

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#fed800] tracking-wider uppercase text-center">
        G-Scores
      </h1>
      <h2 className="text-lg sm:text-2xl font-bold text-gray-500 mt-2 text-center">
        Top {limit} students of group {selectedGroup}
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-6 w-full max-w-xl">
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
          <label className="text-sm sm:text-base font-medium">Top:</label>
          <Select onValueChange={setLimit}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select top" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Top</SelectLabel>
                {Object.keys(TOP).map((key) => (
                  <SelectItem value={key} key={key}>
                    {TOP[key as keyof typeof TOP]}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
          <label className="text-sm sm:text-base font-medium">Group:</label>
          <Select
            onValueChange={(value) =>
              setSelectedGroup(value as keyof typeof GROUPS)
            }
          >
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select group" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Group</SelectLabel>
                {Object.keys(GROUPS).map((key) => (
                  <SelectItem value={key} key={key}>
                    {key}: {GROUPS[key as keyof typeof GROUPS]}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {isLoading &&
        Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className="h-10 w-full max-w-xl mt-4" />
        ))}

      <div className="mt-8 w-full max-w-5xl overflow-x-auto">
        {data && (
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">SBD</TableHead>
                {GROUPS[selectedGroup].split(", ").map((subject) => (
                  <TableHead key={subject} className="text-center">
                    {subject}
                  </TableHead>
                ))}
                <TableHead className="text-right">Tổng</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item: TopStudent) => (
                <TableRow key={item.sbd}>
                  <TableCell className="font-medium">{item.sbd}</TableCell>
                  {GROUPS[selectedGroup].split(", ").map((subject) => {
                    const dbField = Object.keys(SUBJECTS).find(
                      (key) =>
                        SUBJECTS[key as keyof typeof SUBJECTS] === subject
                    ) as keyof TopStudent;
                    return (
                      <TableCell key={subject} className="text-center">
                        {typeof item[dbField] === "number"
                          ? item[dbField]
                          : "N/A"}
                      </TableCell>
                    );
                  })}
                  <TableCell className="text-right font-bold">
                    {typeof item.total === "number"
                      ? item.total.toFixed(2)
                      : "N/A"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
