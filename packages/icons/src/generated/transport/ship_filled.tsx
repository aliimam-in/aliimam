/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ShipFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ShipFilled = React.forwardRef<SVGSVGElement, ShipFilledProps>(
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
      <path d="M21.63 14.6598L21.22 16.5198C20.51 19.7198 18 21.9998 14.38 21.9998H9.61998C5.99998 21.9998 3.48998 19.7198 2.77998 16.5198L2.36998 14.6598C2.16998 13.7498 2.70998 12.7198 3.57998 12.3698L4.99998 11.7998L10.51 9.5898C10.99 9.3998 11.5 9.2998 12 9.2998C12.5 9.2998 13.01 9.3998 13.49 9.5898L19 11.7998L20.42 12.3698C21.29 12.7198 21.83 13.7498 21.63 14.6598Z" fill="currentColor"/>
<path d="M19 8V9.44C19 9.79 18.64 10.04 18.31 9.9L14.04 8.19C12.73 7.68 11.27 7.68 9.95 8.2L5.69 9.91C5.36 10.05 5 9.8 5 9.45V8C5 6.35 6.35 5 8 5H16C17.65 5 19 6.35 19 8Z" fill="currentColor"/>
<path d="M14.5 5H9.5V3C9.5 2.45 9.95 2 10.5 2H13.5C14.05 2 14.5 2.45 14.5 3V5Z" fill="currentColor"/>
    </svg>
  )
);
ShipFilled.displayName = "ShipFilled";
export const ShipFilledMetadata = { 
  id: "ship_filled", 
  baseId: "ship", 
  variant: "filled", 
  name: "Ship", 
  category: "transport", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ShipFilled;
