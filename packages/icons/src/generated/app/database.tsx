/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DatabaseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Database = React.forwardRef<SVGSVGElement, DatabaseProps>(
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
  <path d="M3 5V19A9 3 0 0 0 21 19V5" />
  <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
);
Database.displayName = "Database";
export const DatabaseMetadata = { 
  id: "database", 
  baseId: "database", 
  variant: "default", 
  name: "Database", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Database;
