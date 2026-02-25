/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TrelloProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Trello = React.forwardRef<SVGSVGElement, TrelloProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
  <rect width="3" height="9" x="7" y="7" />
  <rect width="3" height="5" x="14" y="7" />
    </svg>
  )
);
Trello.displayName = "Trello";
export const TrelloMetadata = { 
  id: "trello", 
  baseId: "trello", 
  variant: "default", 
  name: "Trello", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Trello;
