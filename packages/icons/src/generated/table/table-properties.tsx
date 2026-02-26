/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TablePropertiesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TableProperties = React.forwardRef<SVGSVGElement, TablePropertiesProps>(
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
      <path d="M15 3v18" />
  <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M21 9H3" />
  <path d="M21 15H3" />
    </svg>
  )
);
TableProperties.displayName = "TableProperties";
export const TablePropertiesMetadata = { 
  id: "table-properties", 
  baseId: "table-properties", 
  variant: "default", 
  name: "Table Properties", 
  category: "table", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TableProperties;
