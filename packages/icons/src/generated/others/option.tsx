/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface OptionProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Option = React.forwardRef<SVGSVGElement, OptionProps>(
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
      <path d="M3 3h6l6 18h6" />
  <path d="M14 3h7" />
    </svg>
  )
);
Option.displayName = "Option";
export const OptionMetadata = { 
  id: "option", 
  baseId: "option", 
  variant: "default", 
  name: "Option", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Option;
