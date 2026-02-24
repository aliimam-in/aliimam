/**
 * Auto-generated logo component: Map (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixMapLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixMapLogo = React.forwardRef<SVGSVGElement, MixMapLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
  <path d="M15 5.764v15" />
  <path d="M9 3.236v15" />
    </svg>
  )
);

MixMapLogo.displayName = "MixMapLogo";

export const MixMapLogoMetadata = {
  id: "map",
  baseId: "map",
  variant: "default",
  name: "Map",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixMapLogo;
