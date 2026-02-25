/**
 * Auto-generated logo component: Frame Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FrameOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FrameOffOutlineLogo = React.forwardRef<SVGSVGElement, FrameOffOutlineLogoProps>(
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
      <path d="M4 7h3m4 0h9" />
  <path d="M4 17h13" />
  <path d="M7 7v13" />
  <path d="M17 4v9m0 4v3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

FrameOffOutlineLogo.displayName = "FrameOffOutlineLogo";

export const FrameOffOutlineLogoMetadata = {
  id: "frame-off-outline",
  baseId: "frame-off-outline",
  variant: "default",
  name: "Frame Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FrameOffOutlineLogo;
