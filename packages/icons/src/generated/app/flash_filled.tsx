/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FlashFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FlashFilled = React.forwardRef<SVGSVGElement, FlashFilledProps>(
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
      <path d="M17.91 10.7199H14.82V3.5199C14.82 1.8399 13.91 1.4999 12.8 2.7599L12 3.6699L5.23001 11.3699C4.30001 12.4199 4.69001 13.2799 6.09001 13.2799H9.18001V20.4799C9.18001 22.1599 10.09 22.4999 11.2 21.2399L12 20.3299L18.77 12.6299C19.7 11.5799 19.31 10.7199 17.91 10.7199Z" fill="currentColor"/>
    </svg>
  )
);
FlashFilled.displayName = "FlashFilled";
export const FlashFilledMetadata = { 
  id: "flash_filled", 
  baseId: "flash", 
  variant: "filled", 
  name: "Flash", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FlashFilled;
