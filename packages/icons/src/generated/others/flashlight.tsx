/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FlashlightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Flashlight = React.forwardRef<SVGSVGElement, FlashlightProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 13v1" />
  <path d="M17 2a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8A4 4 0 0 0 16 12v8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V3a1 1 0 0 1 1-1z" />
  <path d="M6 6h12" />
    </svg>
  )
);
Flashlight.displayName = "Flashlight";
export const FlashlightMetadata = { id: "flashlight", baseId: "flashlight", variant: "default", name: "Flashlight", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Flashlight;
