/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ReserveFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ReserveFilled = React.forwardRef<SVGSVGElement, ReserveFilledProps>(
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
      <path d="M21.97 18V19C21.97 20.65 21.97 22 18.97 22H4.97C1.97 22 1.97 20.65 1.97 19V18C1.97 17.45 2.42 17 2.97 17H20.97C21.52 17 21.97 17.45 21.97 18Z" fill="currentColor"/>
<path d="M14.41 5.17977C14.46 4.97977 14.49 4.78977 14.5 4.57977C14.53 3.41977 13.82 2.39977 12.7 2.09977C11.02 1.63977 9.49999 2.89977 9.49999 4.49977C9.49999 4.73977 9.52999 4.95977 9.58999 5.17977C5.97999 5.94977 3.26999 9.15977 3.26999 12.9998V14.4998C3.26999 15.0498 3.71999 15.4998 4.26999 15.4998H19.72C20.27 15.4998 20.72 15.0498 20.72 14.4998V12.9998C20.72 9.15977 18.02 5.95977 14.41 5.17977ZM15 11.7498H8.99999C8.58999 11.7498 8.24999 11.4098 8.24999 10.9998C8.24999 10.5898 8.58999 10.2498 8.99999 10.2498H15C15.41 10.2498 15.75 10.5898 15.75 10.9998C15.75 11.4098 15.41 11.7498 15 11.7498Z" fill="currentColor"/>
    </svg>
  )
);
ReserveFilled.displayName = "ReserveFilled";
export const ReserveFilledMetadata = { 
  id: "reserve_filled", 
  baseId: "reserve", 
  variant: "filled", 
  name: "Reserve", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ReserveFilled;
