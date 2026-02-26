/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TagsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Tags = React.forwardRef<SVGSVGElement, TagsProps>(
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
      <path d="M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z" />
  <path d="M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193" />
  <circle cx="10.5" cy="6.5" r=".5" fill="currentColor" />
    </svg>
  )
);
Tags.displayName = "Tags";
export const TagsMetadata = { 
  id: "tags", 
  baseId: "tags", 
  variant: "default", 
  name: "Tags", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Tags;
