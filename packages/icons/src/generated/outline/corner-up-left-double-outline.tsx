/**
 * Auto-generated logo component: Corner Up Left Double Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CornerUpLeftDoubleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CornerUpLeftDoubleOutlineLogo = React.forwardRef<SVGSVGElement, CornerUpLeftDoubleOutlineLogoProps>(
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
      <path d="M19 18v-6a3 3 0 0 0 -3 -3h-7" />
  <path d="M13 13l-4 -4l4 -4m-5 8l-4 -4l4 -4" />
    </svg>
  )
);

CornerUpLeftDoubleOutlineLogo.displayName = "CornerUpLeftDoubleOutlineLogo";

export const CornerUpLeftDoubleOutlineLogoMetadata = {
  id: "corner-up-left-double-outline",
  baseId: "corner-up-left-double-outline",
  variant: "default",
  name: "Corner Up Left Double Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CornerUpLeftDoubleOutlineLogo;
