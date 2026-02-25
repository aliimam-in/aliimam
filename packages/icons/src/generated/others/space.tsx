/**
 * Auto-generated logo component: Space (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SpaceLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SpaceLogo = React.forwardRef<SVGSVGElement, SpaceLogoProps>(
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
      <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
    </svg>
  )
);

SpaceLogo.displayName = "SpaceLogo";

export const SpaceLogoMetadata = {
  id: "space",
  baseId: "space",
  variant: "default",
  name: "Space",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SpaceLogo;
