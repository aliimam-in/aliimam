/**
 * Auto-generated logo component: Jump Rope Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface JumpRopeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const JumpRopeOutlineLogo = React.forwardRef<SVGSVGElement, JumpRopeOutlineLogoProps>(
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
      <path d="M6 14v-6a3 3 0 1 1 6 0v8a3 3 0 0 0 6 0v-6" />
  <path d="M16 5a2 2 0 0 1 2 -2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2a2 2 0 0 1 -2 -2l0 -3" />
  <path d="M4 16a2 2 0 0 1 2 -2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2a2 2 0 0 1 -2 -2l0 -3" />
    </svg>
  )
);

JumpRopeOutlineLogo.displayName = "JumpRopeOutlineLogo";

export const JumpRopeOutlineLogoMetadata = {
  id: "jump-rope-outline",
  baseId: "jump-rope-outline",
  variant: "default",
  name: "Jump Rope Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default JumpRopeOutlineLogo;
