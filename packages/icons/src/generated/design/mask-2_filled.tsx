/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Mask2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Mask2Filled = React.forwardRef<SVGSVGElement, Mask2FilledProps>(
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
      <path d="M18.65 4.59003C16.89 2.99003 14.56 2.03003 12 2.03003C6.50003 2.03003 2.03003 6.50003 2.03003 12C2.03003 17.5 6.50003 21.97 12 21.97C14.56 21.97 16.89 21.01 18.65 19.41C20.69 17.6 21.97 14.94 21.97 12C21.97 9.06003 20.69 6.40003 18.65 4.59003ZM11.97 16.39C11.95 18.04 10.72 18.44 9.57003 17.98C7.20003 17.03 5.53003 14.71 5.53003 12C5.53003 9.29003 7.20003 6.97003 9.57003 6.01003C10.72 5.55003 11.95 5.96003 11.97 7.60003V16.39Z" fill="currentColor"/>
    </svg>
  )
);
Mask2Filled.displayName = "Mask2Filled";
export const Mask2FilledMetadata = { 
  id: "mask-2_filled", 
  baseId: "mask-2", 
  variant: "filled", 
  name: "Mask 2", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Mask2Filled;
