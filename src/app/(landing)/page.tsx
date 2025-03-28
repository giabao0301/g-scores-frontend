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

  console.log(data);

  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <h1 className="text-4xl font-extrabold text-[#fed800] tracking-wider uppercase text-center p-4">
        G-Scores
      </h1>
      <h2 className="text-2xl font-bold text-gray-500">
        Top {limit} students of group {selectedGroup}
      </h2>
      <div className="flex items-center justify-start gap-8 mt-8 ml-8 self-start">
        <label htmlFor="">Top:</label>
        <Select onValueChange={setLimit}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select top" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Top</SelectLabel>
              {Object.keys(TOP).map((key: string) => {
                return (
                  <SelectItem value={key} key={key}>
                    {TOP[key as keyof typeof TOP]}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
        <label htmlFor="">Group:</label>
        <Select
          onValueChange={(value) =>
            setSelectedGroup(value as keyof typeof GROUPS)
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select group" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Group</SelectLabel>
              {Object.keys(GROUPS).map((key: string) => {
                return (
                  <SelectItem value={key} key={key}>
                    {key}: {GROUPS[key as keyof typeof GROUPS]}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {isLoading &&
        Array.from({ length: 5 }).map((_, index) => (
          <Skeleton
            key={index}
            className="flex justify-center p-4 mt-8 mx-8 w-[90%]"
          />
        ))}

      <div className="flex mt-12 justify-center w-full px-8">
        {data && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">SBD</TableHead>
                {GROUPS[selectedGroup].split(", ").map((subject: string) => {
                  return (
                    <TableHead className="text-center" key={subject}>
                      {subject}
                    </TableHead>
                  );
                })}
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
