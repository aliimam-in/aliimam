/**
 * Auto-generated logo component: Corner Right Up Double Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CornerRightUpDoubleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CornerRightUpDoubleOutlineLogo = React.forwardRef<SVGSVGElement, CornerRightUpDoubleOutlineLogoProps>(
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
      <path d="M5 19h6a3 3 0 0 0 3 -3v-7" />
  <path d="M10 13l4 -4l4 4m-8 -5l4 -4l4 4" />
    </svg>
  )
);

CornerRightUpDoubleOutlineLogo.displayName = "CornerRightUpDoubleOutlineLogo";

export const CornerRightUpDoubleOutlineLogoMetadata = {
  id: "corner-right-up-double-outline",
  baseId: "corner-right-up-double-outline",
  variant: "default",
  name: "Corner Right Up Double Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CornerRightUpDoubleOutlineLogo;
