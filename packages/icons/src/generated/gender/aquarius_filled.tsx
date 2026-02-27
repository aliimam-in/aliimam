/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AquariusFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AquariusFilled = React.forwardRef<SVGSVGElement, AquariusFilledProps>(
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
      <path d="M19.75 9C19.75 4.73 16.27 1.25 12 1.25C7.73 1.25 4.25 4.73 4.25 9C4.25 9.41 4.59 9.75 5 9.75C5.41 9.75 5.75 9.41 5.75 9C5.75 5.55 8.55 2.75 12 2.75C15.45 2.75 18.25 5.55 18.25 9C18.25 12.45 15.45 15.25 12 15.25C11.59 15.25 11.25 15.59 11.25 16V22C11.25 22.41 11.59 22.75 12 22.75C12.41 22.75 12.75 22.41 12.75 22V16.71C16.67 16.33 19.75 13.02 19.75 9Z" fill="currentColor"/>
<path d="M15 19.75H9C8.59 19.75 8.25 19.41 8.25 19C8.25 18.59 8.59 18.25 9 18.25H15C15.41 18.25 15.75 18.59 15.75 19C15.75 19.41 15.41 19.75 15 19.75Z" fill="currentColor"/>
    </svg>
  )
);
AquariusFilled.displayName = "AquariusFilled";
export const AquariusFilledMetadata = { 
  id: "aquarius_filled", 
  baseId: "aquarius", 
  variant: "filled", 
  name: "Aquarius", 
  category: "gender", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AquariusFilled;
