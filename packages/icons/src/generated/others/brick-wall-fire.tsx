/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BrickWallFireProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BrickWallFire = React.forwardRef<SVGSVGElement, BrickWallFireProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M16 3v2.107" />
  <path d="M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9" />
  <path d="M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938" />
  <path d="M3 15h5.253" />
  <path d="M3 9h8.228" />
  <path d="M8 15v6" />
  <path d="M8 3v6" />
    </svg>
  )
);
BrickWallFire.displayName = "BrickWallFire";
export const BrickWallFireMetadata = { id: "brick-wall-fire", baseId: "brick-wall-fire", variant: "default", name: "Brick Wall Fire", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default BrickWallFire;
