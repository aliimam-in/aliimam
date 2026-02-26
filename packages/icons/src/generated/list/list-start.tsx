/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ListStartProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ListStart = React.forwardRef<SVGSVGElement, ListStartProps>(
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
      <path d="M3 5h6" />
  <path d="M3 12h13" />
  <path d="M3 19h13" />
  <path d="m16 8-3-3 3-3" />
  <path d="M21 19V7a2 2 0 0 0-2-2h-6" />
    </svg>
  )
);
ListStart.displayName = "ListStart";
export const ListStartMetadata = { 
  id: "list-start", 
  baseId: "list-start", 
  variant: "default", 
  name: "List Start", 
  category: "list", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ListStart;
