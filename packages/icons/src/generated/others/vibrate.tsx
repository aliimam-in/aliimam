/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VibrateProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Vibrate = React.forwardRef<SVGSVGElement, VibrateProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m2 8 2 2-2 2 2 2-2 2" />
  <path d="m22 8-2 2 2 2-2 2 2 2" />
  <rect width="8" height="14" x="8" y="5" rx="1" />
    </svg>
  )
);
Vibrate.displayName = "Vibrate";
export const VibrateMetadata = { id: "vibrate", baseId: "vibrate", variant: "default", name: "Vibrate", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Vibrate;
