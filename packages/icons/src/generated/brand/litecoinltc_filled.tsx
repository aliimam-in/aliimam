/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LitecoinltcFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LitecoinltcFilled = React.forwardRef<SVGSVGElement, LitecoinltcFilledProps>(
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
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.82 16.32C15.73 16.8 15.32 17.14 14.84 17.14H9.29999C8.63999 17.14 8.16 16.5 8.34 15.87L9.17999 12.92L7.47 13.26C7.42 13.27 7.37001 13.27 7.32001 13.27C6.97001 13.27 6.66 13.02 6.59 12.67C6.51 12.26 6.76999 11.87 7.17999 11.79L9.64999 11.3L10.96 6.73C11.02 6.52 11.22 6.37 11.44 6.37H12.8C13.46 6.37 13.94 6.99 13.77 7.63L12.96 10.64L14.89 10.25C15.29 10.17 15.69 10.43 15.77 10.84C15.85 11.25 15.59 11.64 15.18 11.72L12.52 12.25L11.97 14.3H15C15.62 14.3 16.09 14.86 15.98 15.48L15.82 16.32Z" fill="currentColor"/>
    </svg>
  )
);
LitecoinltcFilled.displayName = "LitecoinltcFilled";
export const LitecoinltcFilledMetadata = { 
  id: "litecoinltc_filled", 
  baseId: "litecoinltc", 
  variant: "filled", 
  name: "Litecoinltc", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LitecoinltcFilled;
