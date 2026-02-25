/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WindArrowDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WindArrowDown = React.forwardRef<SVGSVGElement, WindArrowDownProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M10 2v8" />
  <path d="M12.8 21.6A2 2 0 1 0 14 18H2" />
  <path d="M17.5 10a2.5 2.5 0 1 1 2 4H2" />
  <path d="m6 6 4 4 4-4" />
    </svg>
  )
);
WindArrowDown.displayName = "WindArrowDown";
export const WindArrowDownMetadata = { id: "wind-arrow-down", baseId: "wind-arrow-down", variant: "default", name: "Wind Arrow Down", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default WindArrowDown;
