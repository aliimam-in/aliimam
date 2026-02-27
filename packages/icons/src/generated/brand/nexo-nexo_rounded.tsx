/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface NexoNexoRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NexoNexoRounded = React.forwardRef<SVGSVGElement, NexoNexoRoundedProps>(
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
      <path d="M12 6L17 3L22 6V18L17 21L7 15V9L17 15V9L12 6Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6L7 3L2 6V18L7 21L11.7 17.87" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
NexoNexoRounded.displayName = "NexoNexoRounded";
export const NexoNexoRoundedMetadata = { 
  id: "nexo-nexo_rounded", 
  baseId: "nexo-nexo", 
  variant: "rounded", 
  name: "Nexo Nexo", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default NexoNexoRounded;
