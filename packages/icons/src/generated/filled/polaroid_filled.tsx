/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PolaroidFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PolaroidFilled = React.forwardRef<SVGSVGElement, PolaroidFilledProps>(
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
      <path d="M9.199 9.623l.108 .098l3.986 3.986l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-.292 -.293l1.292 -1.293l.106 -.095c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.502 4.503a4.003 4.003 0 0 1 -3.596 2.77l-.213 .006h-12a4.002 4.002 0 0 1 -3.809 -2.775l5.516 -5.518l.106 -.095c.457 -.38 .918 -.38 1.386 .011zm8.801 -7.623a4 4 0 0 1 3.995 3.8l.005 .2v6.585l-3.293 -3.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-1.307 1.306l-2.293 -2.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-4.307 4.306v-6.585a4 4 0 0 1 3.8 -3.995l.2 -.005h12zm-2.99 3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" />
  <path d="M8.01 20a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993l.127 -.007z" />
  <path d="M12.01 20a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993l.127 -.007z" />
  <path d="M16.01 20a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993l.127 -.007z" />
    </svg>
  )
);
PolaroidFilled.displayName = "PolaroidFilled";
export const PolaroidFilledMetadata = { 
  id: "polaroid_filled", 
  baseId: "polaroid", 
  variant: "filled", 
  name: "Polaroid", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PolaroidFilled;
