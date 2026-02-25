/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LibraryBigProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LibraryBig = React.forwardRef<SVGSVGElement, LibraryBigProps>(
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
      <rect width="8" height="18" x="3" y="3" rx="1" />
  <path d="M7 3v18" />
  <path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z" />
    </svg>
  )
);
LibraryBig.displayName = "LibraryBig";
export const LibraryBigMetadata = { 
  id: "library-big", 
  baseId: "library-big", 
  variant: "default", 
  name: "Library Big", 
  category: "book", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LibraryBig;
