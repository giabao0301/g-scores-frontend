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
import { GROUPS, TOP } from "@/constants";
import { getTopStudents } from "@/services/studentService";
import { Result } from "@/types/result";
import { TopStudent } from "@/types/student";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Page() {
  const [selectedGroup, setSelectedGroup] = useState<keyof typeof GROUPS>("A");
  const [top, setTop] = useState<string>("10");

  const { data, isLoading } = useQuery({
    queryKey: ["top", selectedGroup, top],
    queryFn: () => getTopStudents(selectedGroup, top),
    enabled: !!selectedGroup,
  });

  const subjects = data?.[0]?.student.results.map(
    (result: Result) => result.subject
  );

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#fed800] tracking-wider uppercase text-center">
        G-Scores
      </h1>
      <h2 className="text-lg sm:text-2xl font-bold text-gray-500 mt-2 text-center">
        Top {top} students of group {selectedGroup}
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-6 w-full max-w-xl">
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
          <label className="text-sm sm:text-base font-medium">Top:</label>
          <Select onValueChange={setTop}>
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
                <TableHead className="w-[100px]">RegNo</TableHead>
                {subjects?.map((value: string) => (
                  <TableHead className="text-center" key={value}>
                    {value}
                  </TableHead>
                ))}
                <TableHead className="text-right">
                  Foreign Language Code
                </TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item: TopStudent) => {
                const subjectScoreMap = new Map(
                  item.student.results.map((result) => [
                    result.subject,
                    result.score,
                  ])
                );

                return (
                  <TableRow key={item.student.registrationNumber}>
                    <TableCell className="font-medium">
                      {item.student.registrationNumber}
                    </TableCell>
                    {subjects?.map((subject: string) => (
                      <TableCell className="text-center" key={subject}>
                        {subjectScoreMap.get(subject) || "N/A"}
                      </TableCell>
                    ))}
                    <TableCell className="text-right">
                      {item.student.foreignLanguageCode || "N/A"}
                    </TableCell>
                    <TableCell className="text-right font-bold">
                      {item.totalScore}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
