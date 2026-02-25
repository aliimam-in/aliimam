/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VenusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Venus = React.forwardRef<SVGSVGElement, VenusProps>(
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
      <path d="M12 15v7" />
  <path d="M9 19h6" />
  <circle cx="12" cy="9" r="6" />
    </svg>
  )
);
Venus.displayName = "Venus";
export const VenusMetadata = { 
  id: "venus", 
  baseId: "venus", 
  variant: "default", 
  name: "Venus", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Venus;
