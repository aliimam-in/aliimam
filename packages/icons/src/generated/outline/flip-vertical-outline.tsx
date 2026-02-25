/**
 * Auto-generated logo component: Flip Vertical Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlipVerticalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlipVerticalOutlineLogo = React.forwardRef<SVGSVGElement, FlipVerticalOutlineLogoProps>(
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
      <path d="M12 3l0 18" />
  <path d="M16 7l0 10l5 0l-5 -10" />
  <path d="M8 7l0 10l-5 0l5 -10" />
    </svg>
  )
);

FlipVerticalOutlineLogo.displayName = "FlipVerticalOutlineLogo";

export const FlipVerticalOutlineLogoMetadata = {
  id: "flip-vertical-outline",
  baseId: "flip-vertical-outline",
  variant: "default",
  name: "Flip Vertical Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlipVerticalOutlineLogo;
