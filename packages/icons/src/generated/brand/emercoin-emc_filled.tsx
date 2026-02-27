/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EmercoinEmcFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const EmercoinEmcFilled = React.forwardRef<SVGSVGElement, EmercoinEmcFilledProps>(
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
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.25 16C17.25 16.41 16.91 16.75 16.5 16.75H7.5C7.09 16.75 6.75 16.41 6.75 16C6.75 15.59 7.09 15.25 7.5 15.25H15.75V8.75H13.25V12C13.25 12.41 12.91 12.75 12.5 12.75H7.5C7.09 12.75 6.75 12.41 6.75 12C6.75 11.59 7.09 11.25 7.5 11.25H11.75V8.75H7.5C7.09 8.75 6.75 8.41 6.75 8C6.75 7.59 7.09 7.25 7.5 7.25H16.5C16.91 7.25 17.25 7.59 17.25 8V16Z" fill="currentColor"/>
    </svg>
  )
);
EmercoinEmcFilled.displayName = "EmercoinEmcFilled";
export const EmercoinEmcFilledMetadata = { 
  id: "emercoin-emc_filled", 
  baseId: "emercoin-emc", 
  variant: "filled", 
  name: "Emercoin Emc", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default EmercoinEmcFilled;
