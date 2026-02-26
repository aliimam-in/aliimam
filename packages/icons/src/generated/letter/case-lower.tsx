/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CaseLowerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CaseLower = React.forwardRef<SVGSVGElement, CaseLowerProps>(
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
      <path d="M10 9v7" />
  <path d="M14 6v10" />
  <circle cx="17.5" cy="12.5" r="3.5" />
  <circle cx="6.5" cy="12.5" r="3.5" />
    </svg>
  )
);
CaseLower.displayName = "CaseLower";
export const CaseLowerMetadata = { 
  id: "case-lower", 
  baseId: "case-lower", 
  variant: "default", 
  name: "Case Lower", 
  category: "letter", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CaseLower;
