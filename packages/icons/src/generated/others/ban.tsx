/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BanProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ban = React.forwardRef<SVGSVGElement, BanProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="10" />
  <path d="M4.929 4.929 19.07 19.071" />
    </svg>
  )
);
Ban.displayName = "Ban";
export const BanMetadata = { id: "ban", baseId: "ban", variant: "default", name: "Ban", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Ban;
