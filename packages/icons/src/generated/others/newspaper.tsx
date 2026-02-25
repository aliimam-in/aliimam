/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface NewspaperProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Newspaper = React.forwardRef<SVGSVGElement, NewspaperProps>(
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
      <path d="M15 18h-5" />
  <path d="M18 14h-8" />
  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" />
  <rect width="8" height="4" x="10" y="6" rx="1" />
    </svg>
  )
);
Newspaper.displayName = "Newspaper";
export const NewspaperMetadata = { 
  id: "newspaper", 
  baseId: "newspaper", 
  variant: "default", 
  name: "Newspaper", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Newspaper;
