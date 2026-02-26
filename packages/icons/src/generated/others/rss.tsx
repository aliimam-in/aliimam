/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RssProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Rss = React.forwardRef<SVGSVGElement, RssProps>(
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
      <path d="M4 11a9 9 0 0 1 9 9" />
  <path d="M4 4a16 16 0 0 1 16 16" />
  <circle cx="5" cy="19" r="1" />
    </svg>
  )
);
Rss.displayName = "Rss";
export const RssMetadata = { 
  id: "rss", 
  baseId: "rss", 
  variant: "default", 
  name: "Rss", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Rss;
