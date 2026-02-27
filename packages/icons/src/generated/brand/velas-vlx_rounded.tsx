/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VelasVlxRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VelasVlxRounded = React.forwardRef<SVGSVGElement, VelasVlxRoundedProps>(
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
      <path d="M2 3H22"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.99988 6.40002H19.9999C20.8999 6.40002 21.3999 7.40002 20.8999 8.10002L12.8999 20.5C12.4999 21.2 11.4999 21.2 10.9999 20.5L2.99988 8.10002C2.59988 7.30002 3.19988 6.40002 3.99988 6.40002Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
VelasVlxRounded.displayName = "VelasVlxRounded";
export const VelasVlxRoundedMetadata = { 
  id: "velas-vlx_rounded", 
  baseId: "velas-vlx", 
  variant: "rounded", 
  name: "Velas Vlx", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default VelasVlxRounded;
