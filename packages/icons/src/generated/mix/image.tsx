/**
 * Auto-generated logo component: Image (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixImageLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixImageLogo = React.forwardRef<SVGSVGElement, MixImageLogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
  <circle cx="9" cy="9" r="2" />
  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
);

MixImageLogo.displayName = "MixImageLogo";

export const MixImageLogoMetadata = {
  id: "image",
  baseId: "image",
  variant: "default",
  name: "Image",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixImageLogo;
