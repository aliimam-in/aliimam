/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ALargeSmallProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ALargeSmall = React.forwardRef<SVGSVGElement, ALargeSmallProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16" />
  <path d="M15.697 14h5.606" />
  <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
  <path d="M3.304 13h6.392" />
    </svg>
  )
);
ALargeSmall.displayName = "ALargeSmall";
export const ALargeSmallMetadata = { id: "a-large-small", baseId: "a-large-small", variant: "default", name: "A Large Small", category: "letter", tags: [], viewBox: "0 0 24 24" } as const;
export default ALargeSmall;
