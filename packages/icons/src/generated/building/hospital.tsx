/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HospitalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Hospital = React.forwardRef<SVGSVGElement, HospitalProps>(
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
      <path d="M12 7v4" />
  <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
  <path d="M14 9h-4" />
  <path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
  <path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" />
    </svg>
  )
);
Hospital.displayName = "Hospital";
export const HospitalMetadata = { 
  id: "hospital", 
  baseId: "hospital", 
  variant: "default", 
  name: "Hospital", 
  category: "building", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Hospital;
