/**
 * Auto-generated logo component: Corner Right Up (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixCornerRightUpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixCornerRightUpLogo = React.forwardRef<SVGSVGElement, MixCornerRightUpLogoProps>(
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

MixCornerRightUpLogo.displayName = "MixCornerRightUpLogo";

export const MixCornerRightUpLogoMetadata = {
  id: "corner-right-up",
  baseId: "corner-right-up",
  variant: "default",
  name: "Corner Right Up",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixCornerRightUpLogo;
