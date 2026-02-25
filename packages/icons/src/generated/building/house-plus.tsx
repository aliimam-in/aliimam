/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HousePlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HousePlus = React.forwardRef<SVGSVGElement, HousePlusProps>(
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
      <path d="M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35" />
  <path d="M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8" />
  <path d="M15 18h6" />
  <path d="M18 15v6" />
    </svg>
  )
);
HousePlus.displayName = "HousePlus";
export const HousePlusMetadata = { 
  id: "house-plus", 
  baseId: "house-plus", 
  variant: "default", 
  name: "House Plus", 
  category: "building", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HousePlus;
