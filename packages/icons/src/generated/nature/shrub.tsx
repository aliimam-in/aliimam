/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ShrubProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Shrub = React.forwardRef<SVGSVGElement, ShrubProps>(
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
      <path d="M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5" />
  <path d="M14.5 14.5 12 17" />
  <path d="M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z" />
    </svg>
  )
);
Shrub.displayName = "Shrub";
export const ShrubMetadata = { 
  id: "shrub", 
  baseId: "shrub", 
  variant: "default", 
  name: "Shrub", 
  category: "nature", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Shrub;
