"use client";
import { Input } from "@/registry/aliimam/ui/input";
import { Search, X } from "lucide-react";
import { useLogos } from "./logo-context";
import { useIcons } from "./icon-context";

interface LogoSearchProps {
  placeholder?: string;
}

interface IconSearchProps {
  placeholder?: string;
}

export function IconSearch({ placeholder = "icons..." }: IconSearchProps) {
  const { searchQuery, setSearchQuery, iconComponents } = useIcons();

  // Calculate total icons
  const totalIcons = iconComponents?.length || 0;
  const dynamicPlaceholder = `Search ${totalIcons} ${placeholder}`;

  return (
    <div className="lg:w-80">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder={dynamicPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}

export function LogoSearch({ placeholder = "logos..." }: LogoSearchProps) {
  const { searchQuery, setSearchQuery, iconComponents } = useLogos(); // Adjust based on actual context

  // Calculate total logos (assuming logoComponents exists; adjust if different)
  const totalLogos = iconComponents?.length || 0;
  const dynamicPlaceholder = `Search ${totalLogos} ${placeholder} `;

  return (
    <div className="lg:w-80">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder={dynamicPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}