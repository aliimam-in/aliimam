/**
 * Auto-generated logo component: Corner Right Down (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixCornerRightDownLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixCornerRightDownLogo = React.forwardRef<SVGSVGElement, MixCornerRightDownLogoProps>(
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
      <path d="m10 15 5 5 5-5" />
  <path d="M4 4h7a4 4 0 0 1 4 4v12" />
    </svg>
  )
);

MixCornerRightDownLogo.displayName = "MixCornerRightDownLogo";

export const MixCornerRightDownLogoMetadata = {
  id: "corner-right-down",
  baseId: "corner-right-down",
  variant: "default",
  name: "Corner Right Down",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixCornerRightDownLogo;
