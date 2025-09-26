"use client";

import { useRouter, usePathname } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { Blocks, Book, Palette } from "lucide-react";
import { useEffect, useState } from 'react';

export function SwitchPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedValue, setSelectedValue] = useState("1"); // Default to "1" (Docs)

  // Map base paths to select values
  const pathToValue: { [key: string]: string } = {
    '/docs': '1',
    '/blocks': '2',
    '/colors': '3',
    '/blogs': '4',
  };

  // Update selected value based on current pathname
  useEffect(() => {
    // Find the base path that matches the start of the pathname
    const matchingPath = Object.keys(pathToValue).find((path) =>
      pathname === path || pathname.startsWith(path + '/')
    );
    const value = matchingPath ? pathToValue[matchingPath] : "1"; // Fallback to "1"
    //@ts-ignore
    setSelectedValue(value);
  }, [pathname]);

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
    // Define URL paths based on selected value
    const paths: { [key: string]: string } = {
      '1': '/docs',
      '2': '/blocks',
      '3': '/colors',
      '4': '/blogs',
    };

    // Navigate to the corresponding path
    router.push(paths[value] || '/');
  };

  return (
    <div className='mt-2'>
      <Select value={selectedValue} onValueChange={handleSelectChange}>
        <SelectTrigger className="w-full rounded-sm min-h-12">
          <SelectValue className="h-16" placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem className="min-h-12" value="1">
            <Book />
            Docs
          </SelectItem>
          <SelectItem className="min-h-12" value="2">
            <Blocks />
            Blocks
          </SelectItem>
          <SelectItem className="min-h-12" value="3">
            <Palette />
            Colors
          </SelectItem>
          <SelectItem className="min-h-12" value="4">
            <Book /> {/* Changed to Book icon for clarity */}
            Blogs
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}