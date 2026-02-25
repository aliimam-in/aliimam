/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EggProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Egg = React.forwardRef<SVGSVGElement, EggProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12" />
    </svg>
  )
);
Egg.displayName = "Egg";
export const EggMetadata = { id: "egg", baseId: "egg", variant: "default", name: "Egg", category: "food", tags: [], viewBox: "0 0 24 24" } as const;
export default Egg;
