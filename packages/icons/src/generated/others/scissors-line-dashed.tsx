/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ScissorsLineDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ScissorsLineDashed = React.forwardRef<SVGSVGElement, ScissorsLineDashedProps>(
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
      <path d="M5.42 9.42 8 12" />
  <circle cx="4" cy="8" r="2" />
  <path d="m14 6-8.58 8.58" />
  <circle cx="4" cy="16" r="2" />
  <path d="M10.8 14.8 14 18" />
  <path d="M16 12h-2" />
  <path d="M22 12h-2" />
    </svg>
  )
);
ScissorsLineDashed.displayName = "ScissorsLineDashed";
export const ScissorsLineDashedMetadata = { 
  id: "scissors-line-dashed", 
  baseId: "scissors-line-dashed", 
  variant: "default", 
  name: "Scissors Line Dashed", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ScissorsLineDashed;
