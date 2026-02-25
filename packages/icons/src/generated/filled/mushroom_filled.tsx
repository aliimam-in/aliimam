/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MushroomFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MushroomFilled = React.forwardRef<SVGSVGElement, MushroomFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M15 15v4a3 3 0 0 1 -5.995 .176l-.005 -.176v-4h6zm-10.1 -2a1.9 1.9 0 0 1 -1.894 -1.752l-.006 -.148c0 -5.023 4.027 -9.1 9 -9.1s9 4.077 9 9.1a1.9 1.9 0 0 1 -1.752 1.894l-.148 .006h-14.2z" />
    </svg>
  )
);
MushroomFilled.displayName = "MushroomFilled";
export const MushroomFilledMetadata = { id: "mushroom_filled", baseId: "mushroom", variant: "filled", name: "Mushroom", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default MushroomFilled;
