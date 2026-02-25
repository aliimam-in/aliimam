/**
 * Auto-generated logo component: Join Straight Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface JoinStraightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const JoinStraightOutlineLogo = React.forwardRef<SVGSVGElement, JoinStraightOutlineLogoProps>(
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
      <path d="M6 4h3a2 2 0 0 1 2 2v6a1 1 0 0 0 1 1h6a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
    </svg>
  )
);

JoinStraightOutlineLogo.displayName = "JoinStraightOutlineLogo";

export const JoinStraightOutlineLogoMetadata = {
  id: "join-straight-outline",
  baseId: "join-straight-outline",
  variant: "default",
  name: "Join Straight Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default JoinStraightOutlineLogo;
