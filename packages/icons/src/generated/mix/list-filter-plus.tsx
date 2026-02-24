/**
 * Auto-generated logo component: List Filter Plus (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ListFilterPlusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ListFilterPlusLogo = React.forwardRef<SVGSVGElement, ListFilterPlusLogoProps>(
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
      <path d="M12 5H2" />
  <path d="M6 12h12" />
  <path d="M9 19h6" />
  <path d="M16 5h6" />
  <path d="M19 8V2" />
    </svg>
  )
);

ListFilterPlusLogo.displayName = "ListFilterPlusLogo";

export const ListFilterPlusLogoMetadata = {
  id: "list-filter-plus",
  baseId: "list-filter-plus",
  variant: "default",
  name: "List Filter Plus",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ListFilterPlusLogo;
