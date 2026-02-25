/**
 * Auto-generated logo component: U Turn Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UTurnRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UTurnRightOutlineLogo = React.forwardRef<SVGSVGElement, UTurnRightOutlineLogoProps>(
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
      <path d="M7 20v-11.5a4.5 4.5 0 0 1 9 0v8.5" />
  <path d="M13 14l3 3l3 -3" />
    </svg>
  )
);

UTurnRightOutlineLogo.displayName = "UTurnRightOutlineLogo";

export const UTurnRightOutlineLogoMetadata = {
  id: "u-turn-right-outline",
  baseId: "u-turn-right-outline",
  variant: "default",
  name: "U Turn Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UTurnRightOutlineLogo;
