/**
 * Auto-generated logo component: Join Round Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface JoinRoundOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const JoinRoundOutlineLogo = React.forwardRef<SVGSVGElement, JoinRoundOutlineLogoProps>(
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
      <path d="M6 4h3a2 2 0 0 1 2 2v6a1 1 0 0 0 1 1h6a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-6a8 8 0 0 1 -8 -8v-6a2 2 0 0 1 2 -2" />
    </svg>
  )
);

JoinRoundOutlineLogo.displayName = "JoinRoundOutlineLogo";

export const JoinRoundOutlineLogoMetadata = {
  id: "join-round-outline",
  baseId: "join-round-outline",
  variant: "default",
  name: "Join Round Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default JoinRoundOutlineLogo;
