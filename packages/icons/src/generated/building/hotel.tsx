/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HotelProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Hotel = React.forwardRef<SVGSVGElement, HotelProps>(
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
      <path d="M10 22v-6.57" />
  <path d="M12 11h.01" />
  <path d="M12 7h.01" />
  <path d="M14 15.43V22" />
  <path d="M15 16a5 5 0 0 0-6 0" />
  <path d="M16 11h.01" />
  <path d="M16 7h.01" />
  <path d="M8 11h.01" />
  <path d="M8 7h.01" />
  <rect x="4" y="2" width="16" height="20" rx="2" />
    </svg>
  )
);
Hotel.displayName = "Hotel";
export const HotelMetadata = { 
  id: "hotel", 
  baseId: "hotel", 
  variant: "default", 
  name: "Hotel", 
  category: "building", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Hotel;
