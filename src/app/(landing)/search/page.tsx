"use client";
import SearchBar from "@/components/SearchBar";
import PageTitle from "@/components/ui/PageTitle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getScoreByRegistrationNumber } from "@/services/scoreService";
import { Score } from "@/types/score";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SUBJECTS } from "@/constants";
import { Skeleton } from "@/components/ui/skeleton";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data, isError, isLoading } = useQuery({
    queryKey: ["search", searchQuery],
    queryFn: () => getScoreByRegistrationNumber(searchQuery),
    enabled: !!searchQuery,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="h-screen">
      <PageTitle title="Search scores" className="mb-8" />
      <div className="flex flex-col items-center justify-center p-4">
        <SearchBar onSearch={setSearchQuery} />
      </div>
      {isLoading &&
        Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className="flex justify-center p-4 mt-8 mx-8" />
        ))}
      <div className="flex justify-center p-8 mt-8">
        {data && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">SBD</TableHead>
                {Object.values(SUBJECTS).map((value: string) => (
                  <TableHead className="text-center" key={value}>
                    {value}
                  </TableHead>
                ))}
                <TableHead className="text-right">Mã ngoại ngữ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">{data.sbd}</TableCell>
                {Object.keys(SUBJECTS).map((key: string) => {
                  return (
                    <TableCell className="text-center" key={key}>
                      {data[key as keyof Score]}
                    </TableCell>
                  );
                })}
                <TableCell className="text-right">
                  {data.ma_ngoai_ngu}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}
        {isError && (
          <p className="text-gray-500 text-center mt-4">
            No score found for this registration number
          </p>
        )}
      </div>
    </div>
  );
};

export default Page;
