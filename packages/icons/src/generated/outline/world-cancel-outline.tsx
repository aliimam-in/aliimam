/**
 * Auto-generated logo component: World Cancel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WorldCancelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WorldCancelOutlineLogo = React.forwardRef<SVGSVGElement, WorldCancelOutlineLogoProps>(
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
      <path d="M21 12a9 9 0 1 0 -8.985 9" />
  <path d="M3.6 9h16.8" />
  <path d="M3.6 15h9.9" />
  <path d="M11.5 3a17 17 0 0 0 0 18" />
  <path d="M12.5 3a16.991 16.991 0 0 1 2.53 10.275" />
  <path d="M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M17 21l4 -4" />
    </svg>
  )
);

WorldCancelOutlineLogo.displayName = "WorldCancelOutlineLogo";

export const WorldCancelOutlineLogoMetadata = {
  id: "world-cancel-outline",
  baseId: "world-cancel-outline",
  variant: "default",
  name: "World Cancel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WorldCancelOutlineLogo;
