/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ZelZelRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ZelZelRounded = React.forwardRef<SVGSVGElement, ZelZelRoundedProps>(
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
      <path d="M10.5 11.5V14.3L8 15.8L5.5 14.3V11.5L8 10L9.2 10.7L10.5 11.5Z"   strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M18.5 11.5V14.3L16 15.8L13.5 14.3V11.5L14.8 10.7L16 10L18.5 11.5Z"   strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M14.8 9.29999V10.7L13.5 11.5V13.2L12 14.1L10.5 13.2V11.5L9.19995 10.7V9.29999L12 7.79999L14.8 9.29999Z"   strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeMiterlimit="10" strokeLinejoin="round"/>
    </svg>
  )
);
ZelZelRounded.displayName = "ZelZelRounded";
export const ZelZelRoundedMetadata = { 
  id: "zel-zel_rounded", 
  baseId: "zel-zel", 
  variant: "rounded", 
  name: "Zel Zel", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ZelZelRounded;
