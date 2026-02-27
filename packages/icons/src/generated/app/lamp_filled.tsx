/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LampFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LampFilled = React.forwardRef<SVGSVGElement, LampFilledProps>(
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
      <path d="M12.5 5.47979C12.58 5.47979 12.66 5.47978 12.75 5.48978V2.52979C12.75 2.11979 12.41 1.77979 12 1.77979C11.59 1.77979 11.25 2.11979 11.25 2.52979V5.48978C11.33 5.47978 11.41 5.47979 11.5 5.47979C6.88997 5.70979 3.21997 9.50979 3.21997 14.1798V16.1198C3.21997 17.2198 4.11997 18.1198 5.21997 18.1198H18.78C19.88 18.1198 20.78 17.2198 20.78 16.1198V14.1798C20.78 9.50979 17.11 5.70979 12.5 5.47979Z" fill="currentColor"/>
<path d="M14.73 19.1099C15.06 19.1099 15.3 19.4199 15.22 19.7399C14.84 21.1699 13.54 22.2199 12 22.2199C10.46 22.2199 9.16001 21.1699 8.78001 19.7399C8.70001 19.4199 8.94001 19.1099 9.27001 19.1099H14.73Z" fill="currentColor"/>
    </svg>
  )
);
LampFilled.displayName = "LampFilled";
export const LampFilledMetadata = { 
  id: "lamp_filled", 
  baseId: "lamp", 
  variant: "filled", 
  name: "Lamp", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LampFilled;
