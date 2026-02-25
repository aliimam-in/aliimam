/**
 * Auto-generated logo component: Corner Right Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CornerRightUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CornerRightUpOutlineLogo = React.forwardRef<SVGSVGElement, CornerRightUpOutlineLogoProps>(
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
      <path d="M6 18h6a3 3 0 0 0 3 -3v-10l-4 4m8 0l-4 -4" />
    </svg>
  )
);

CornerRightUpOutlineLogo.displayName = "CornerRightUpOutlineLogo";

export const CornerRightUpOutlineLogoMetadata = {
  id: "corner-right-up-outline",
  baseId: "corner-right-up-outline",
  variant: "default",
  name: "Corner Right Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CornerRightUpOutlineLogo;
