/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CdFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CdFilled = React.forwardRef<SVGSVGElement, CdFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5Z" fill="currentColor"/>
    </svg>
  )
);
CdFilled.displayName = "CdFilled";
export const CdFilledMetadata = { 
  id: "cd_filled", 
  baseId: "cd", 
  variant: "filled", 
  name: "Cd", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CdFilled;
