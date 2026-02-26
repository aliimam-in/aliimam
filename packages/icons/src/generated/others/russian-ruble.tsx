/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RussianRubleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RussianRuble = React.forwardRef<SVGSVGElement, RussianRubleProps>(
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
      <path d="M6 11h8a4 4 0 0 0 0-8H9v18" />
  <path d="M6 15h8" />
    </svg>
  )
);
RussianRuble.displayName = "RussianRuble";
export const RussianRubleMetadata = { 
  id: "russian-ruble", 
  baseId: "russian-ruble", 
  variant: "default", 
  name: "Russian Ruble", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RussianRuble;
