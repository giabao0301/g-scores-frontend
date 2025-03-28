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
    <div className="min-h-screen p-4">
      <PageTitle title="Search scores" className="mb-6 text-center" />
      <div className="flex flex-col items-center">
        <SearchBar onSearch={setSearchQuery} />
      </div>

      {isLoading &&
        Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className="h-10 w-full max-w-lg mx-auto mt-4" />
        ))}

      <div className="flex justify-center mt-6">
        {data && (
          <div className="w-full max-w-4xl overflow-x-auto">
            <Table className="w-full">
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
                  {Object.keys(SUBJECTS).map((key: string) => (
                    <TableCell className="text-center" key={key}>
                      {data[key as keyof Score]}
                    </TableCell>
                  ))}
                  <TableCell className="text-right">
                    {data.ma_ngoai_ngu}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}
      </div>

      {isError && (
        <p className="text-gray-500 text-center mt-6">
          No score found for this registration number
        </p>
      )}
    </div>
  );
};

export default Page;
