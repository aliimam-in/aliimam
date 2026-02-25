/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WineOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WineOff = React.forwardRef<SVGSVGElement, WineOffProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M8 22h8" />
  <path d="M7 10h3m7 0h-1.343" />
  <path d="M12 15v7" />
  <path d="M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198" />
  <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  )
);
WineOff.displayName = "WineOff";
export const WineOffMetadata = { id: "wine-off", baseId: "wine-off", variant: "default", name: "Wine Off", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default WineOff;
