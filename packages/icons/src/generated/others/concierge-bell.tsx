/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ConciergeBellProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ConciergeBell = React.forwardRef<SVGSVGElement, ConciergeBellProps>(
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
      <path d="M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z" />
  <path d="M20 16a8 8 0 1 0-16 0" />
  <path d="M12 4v4" />
  <path d="M10 4h4" />
    </svg>
  )
);
ConciergeBell.displayName = "ConciergeBell";
export const ConciergeBellMetadata = { 
  id: "concierge-bell", 
  baseId: "concierge-bell", 
  variant: "default", 
  name: "Concierge Bell", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ConciergeBell;
