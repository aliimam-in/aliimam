/**
 * Auto-generated logo component: Frame (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FrameLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FrameLogo = React.forwardRef<SVGSVGElement, FrameLogoProps>(
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
      <line x1="22" x2="2" y1="6" y2="6" />
  <line x1="22" x2="2" y1="18" y2="18" />
  <line x1="6" x2="6" y1="2" y2="22" />
  <line x1="18" x2="18" y1="2" y2="22" />
    </svg>
  )
);

FrameLogo.displayName = "FrameLogo";

export const FrameLogoMetadata = {
  id: "frame",
  baseId: "frame",
  variant: "default",
  name: "Frame",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FrameLogo;
