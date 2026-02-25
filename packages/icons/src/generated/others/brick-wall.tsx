/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BrickWallProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BrickWall = React.forwardRef<SVGSVGElement, BrickWallProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M12 9v6" />
  <path d="M16 15v6" />
  <path d="M16 3v6" />
  <path d="M3 15h18" />
  <path d="M3 9h18" />
  <path d="M8 15v6" />
  <path d="M8 3v6" />
    </svg>
  )
);
BrickWall.displayName = "BrickWall";
export const BrickWallMetadata = { id: "brick-wall", baseId: "brick-wall", variant: "default", name: "Brick Wall", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default BrickWall;
