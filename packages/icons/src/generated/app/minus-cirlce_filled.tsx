/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MinusCirlceFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MinusCirlceFilled = React.forwardRef<SVGSVGElement, MinusCirlceFilledProps>(
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
      <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.92 12.75H7.92C7.51 12.75 7.17 12.41 7.17 12C7.17 11.59 7.51 11.25 7.92 11.25H15.92C16.33 11.25 16.67 11.59 16.67 12C16.67 12.41 16.34 12.75 15.92 12.75Z" fill="currentColor"/>
    </svg>
  )
);
MinusCirlceFilled.displayName = "MinusCirlceFilled";
export const MinusCirlceFilledMetadata = { 
  id: "minus-cirlce_filled", 
  baseId: "minus-cirlce", 
  variant: "filled", 
  name: "Minus Cirlce", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MinusCirlceFilled;
