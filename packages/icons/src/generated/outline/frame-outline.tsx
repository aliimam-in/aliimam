/**
 * Auto-generated logo component: Frame Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FrameOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FrameOutlineLogo = React.forwardRef<SVGSVGElement, FrameOutlineLogoProps>(
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
      <path d="M4 7l16 0" />
  <path d="M4 17l16 0" />
  <path d="M7 4l0 16" />
  <path d="M17 4l0 16" />
    </svg>
  )
);

FrameOutlineLogo.displayName = "FrameOutlineLogo";

export const FrameOutlineLogoMetadata = {
  id: "frame-outline",
  baseId: "frame-outline",
  variant: "default",
  name: "Frame Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FrameOutlineLogo;
