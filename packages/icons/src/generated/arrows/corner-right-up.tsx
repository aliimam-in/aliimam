/**
 * Auto-generated logo component: Corner Right Up (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CornerRightUpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CornerRightUpLogo = React.forwardRef<SVGSVGElement, CornerRightUpLogoProps>(
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
      <path d="m10 9 5-5 5 5" />
  <path d="M4 20h7a4 4 0 0 0 4-4V4" />
    </svg>
  )
);

CornerRightUpLogo.displayName = "CornerRightUpLogo";

export const CornerRightUpLogoMetadata = {
  id: "corner-right-up",
  baseId: "corner-right-up",
  variant: "default",
  name: "Corner Right Up",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CornerRightUpLogo;
