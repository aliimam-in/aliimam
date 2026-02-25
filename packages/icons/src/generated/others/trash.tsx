/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TrashProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Trash = React.forwardRef<SVGSVGElement, TrashProps>(
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
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  )
);
Trash.displayName = "Trash";
export const TrashMetadata = { 
  id: "trash", 
  baseId: "trash", 
  variant: "default", 
  name: "Trash", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Trash;
