/**
 * Auto-generated logo component: Hexagon (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixHexagonLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixHexagonLogo = React.forwardRef<SVGSVGElement, MixHexagonLogoProps>(
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  )
);

MixHexagonLogo.displayName = "MixHexagonLogo";

export const MixHexagonLogoMetadata = {
  id: "hexagon",
  baseId: "hexagon",
  variant: "default",
  name: "Hexagon",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixHexagonLogo;
