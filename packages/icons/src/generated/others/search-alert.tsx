/**
 * Auto-generated logo component: Search Alert (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SearchAlertLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SearchAlertLogo = React.forwardRef<SVGSVGElement, SearchAlertLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <circle cx="11" cy="11" r="8" />
  <path d="m21 21-4.3-4.3" />
  <path d="M11 7v4" />
  <path d="M11 15h.01" />
    </svg>
  )
);

SearchAlertLogo.displayName = "SearchAlertLogo";

export const SearchAlertLogoMetadata = {
  id: "search-alert",
  baseId: "search-alert",
  variant: "default",
  name: "Search Alert",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SearchAlertLogo;
