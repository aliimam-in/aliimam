/**
 * Auto-generated logo component: U Turn Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UTurnLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UTurnLeftOutlineLogo = React.forwardRef<SVGSVGElement, UTurnLeftOutlineLogoProps>(
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
      <path d="M17 20v-11.5a4.5 4.5 0 1 0 -9 0v8.5" />
  <path d="M11 14l-3 3l-3 -3" />
    </svg>
  )
);

UTurnLeftOutlineLogo.displayName = "UTurnLeftOutlineLogo";

export const UTurnLeftOutlineLogoMetadata = {
  id: "u-turn-left-outline",
  baseId: "u-turn-left-outline",
  variant: "default",
  name: "U Turn Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UTurnLeftOutlineLogo;
