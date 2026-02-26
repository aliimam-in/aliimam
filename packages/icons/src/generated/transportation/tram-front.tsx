/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TramFrontProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TramFront = React.forwardRef<SVGSVGElement, TramFrontProps>(
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
      <rect width="16" height="16" x="4" y="3" rx="2" />
  <path d="M4 11h16" />
  <path d="M12 3v8" />
  <path d="m8 19-2 3" />
  <path d="m18 22-2-3" />
  <path d="M8 15h.01" />
  <path d="M16 15h.01" />
    </svg>
  )
);
TramFront.displayName = "TramFront";
export const TramFrontMetadata = { 
  id: "tram-front", 
  baseId: "tram-front", 
  variant: "default", 
  name: "Tram Front", 
  category: "transportation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TramFront;
