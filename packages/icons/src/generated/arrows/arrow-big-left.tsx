/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowBigLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowBigLeft = React.forwardRef<SVGSVGElement, ArrowBigLeftProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" />
    </svg>
  )
);
ArrowBigLeft.displayName = "ArrowBigLeft";
export const ArrowBigLeftMetadata = { id: "arrow-big-left", baseId: "arrow-big-left", variant: "default", name: "Arrow Big Left", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default ArrowBigLeft;
