/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FilePlusCornerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FilePlusCorner = React.forwardRef<SVGSVGElement, FilePlusCornerProps>(
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
      <path d="M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M14 19h6" />
  <path d="M17 16v6" />
    </svg>
  )
);
FilePlusCorner.displayName = "FilePlusCorner";
export const FilePlusCornerMetadata = { 
  id: "file-plus-corner", 
  baseId: "file-plus-corner", 
  variant: "default", 
  name: "File Plus Corner", 
  category: "file", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FilePlusCorner;
