/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LandmarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Landmark = React.forwardRef<SVGSVGElement, LandmarkProps>(
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
      <path d="M10 18v-7" />
  <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z" />
  <path d="M14 18v-7" />
  <path d="M18 18v-7" />
  <path d="M3 22h18" />
  <path d="M6 18v-7" />
    </svg>
  )
);
Landmark.displayName = "Landmark";
export const LandmarkMetadata = { 
  id: "landmark", 
  baseId: "landmark", 
  variant: "default", 
  name: "Landmark", 
  category: "building", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Landmark;
