/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TextSearchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TextSearch = React.forwardRef<SVGSVGElement, TextSearchProps>(
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
      <path d="M21 5H3" />
  <path d="M10 12H3" />
  <path d="M10 19H3" />
  <circle cx="17" cy="15" r="3" />
  <path d="m21 19-1.9-1.9" />
    </svg>
  )
);
TextSearch.displayName = "TextSearch";
export const TextSearchMetadata = { 
  id: "text-search", 
  baseId: "text-search", 
  variant: "default", 
  name: "Text Search", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TextSearch;
