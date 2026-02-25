/**
 * Auto-generated logo component: Flip Horizontal 2 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlipHorizontal2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlipHorizontal2Logo = React.forwardRef<SVGSVGElement, FlipHorizontal2LogoProps>(
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
      <path d="m3 7 5 5-5 5V7" />
  <path d="m21 7-5 5 5 5V7" />
  <path d="M12 20v2" />
  <path d="M12 14v2" />
  <path d="M12 8v2" />
  <path d="M12 2v2" />
    </svg>
  )
);

FlipHorizontal2Logo.displayName = "FlipHorizontal2Logo";

export const FlipHorizontal2LogoMetadata = {
  id: "flip-horizontal-2",
  baseId: "flip-horizontal-2",
  variant: "default",
  name: "Flip Horizontal 2",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlipHorizontal2Logo;
