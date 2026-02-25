/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ListIndentIncreaseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ListIndentIncrease = React.forwardRef<SVGSVGElement, ListIndentIncreaseProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M21 5H11" />
  <path d="M21 12H11" />
  <path d="M21 19H11" />
  <path d="m3 8 4 4-4 4" />
    </svg>
  )
);
ListIndentIncrease.displayName = "ListIndentIncrease";
export const ListIndentIncreaseMetadata = { 
  id: "list-indent-increase", 
  baseId: "list-indent-increase", 
  variant: "default", 
  name: "List Indent Increase", 
  category: "list", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ListIndentIncrease;
