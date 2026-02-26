/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UtilityPoleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UtilityPole = React.forwardRef<SVGSVGElement, UtilityPoleProps>(
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
      <path d="M12 2v20" />
  <path d="M2 5h20" />
  <path d="M3 3v2" />
  <path d="M7 3v2" />
  <path d="M17 3v2" />
  <path d="M21 3v2" />
  <path d="m19 5-7 7-7-7" />
    </svg>
  )
);
UtilityPole.displayName = "UtilityPole";
export const UtilityPoleMetadata = { 
  id: "utility-pole", 
  baseId: "utility-pole", 
  variant: "default", 
  name: "Utility Pole", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default UtilityPole;
