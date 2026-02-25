/**
 * Auto-generated logo component: Pyramid (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PyramidLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PyramidLogo = React.forwardRef<SVGSVGElement, PyramidLogoProps>(
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
      <path d="M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z" />
  <path d="M12 2v20" />
    </svg>
  )
);

PyramidLogo.displayName = "PyramidLogo";

export const PyramidLogoMetadata = {
  id: "pyramid",
  baseId: "pyramid",
  variant: "default",
  name: "Pyramid",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PyramidLogo;
