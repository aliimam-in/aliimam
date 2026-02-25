/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LibraryProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Library = React.forwardRef<SVGSVGElement, LibraryProps>(
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
      <path d="m16 6 4 14" />
  <path d="M12 6v14" />
  <path d="M8 8v12" />
  <path d="M4 4v16" />
    </svg>
  )
);
Library.displayName = "Library";
export const LibraryMetadata = { 
  id: "library", 
  baseId: "library", 
  variant: "default", 
  name: "Library", 
  category: "book", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Library;
