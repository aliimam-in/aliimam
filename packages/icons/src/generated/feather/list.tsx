/**
 * Auto-generated logo component: List (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ListLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ListLogo = React.forwardRef<SVGSVGElement, ListLogoProps>(
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
      <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
    </svg>
  )
);

ListLogo.displayName = "ListLogo";

export const ListLogoMetadata = {
  id: "list",
  baseId: "list",
  variant: "default",
  name: "List",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ListLogo;
