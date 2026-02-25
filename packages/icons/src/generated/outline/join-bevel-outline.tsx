/**
 * Auto-generated logo component: Join Bevel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface JoinBevelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const JoinBevelOutlineLogo = React.forwardRef<SVGSVGElement, JoinBevelOutlineLogoProps>(
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
      <path d="M6 4h3a2 2 0 0 1 2 2v6a1 1 0 0 0 1 1h6a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-6.586a1 1 0 0 1 -.707 -.293l-6.414 -6.414a1 1 0 0 1 -.293 -.707v-6.586a2 2 0 0 1 2 -2" />
    </svg>
  )
);

JoinBevelOutlineLogo.displayName = "JoinBevelOutlineLogo";

export const JoinBevelOutlineLogoMetadata = {
  id: "join-bevel-outline",
  baseId: "join-bevel-outline",
  variant: "default",
  name: "Join Bevel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default JoinBevelOutlineLogo;
