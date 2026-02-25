/**
 * Auto-generated logo component: Details Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DetailsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DetailsOutlineLogo = React.forwardRef<SVGSVGElement, DetailsOutlineLogoProps>(
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
      <path d="M11.999 3l.001 17" />
  <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" />
    </svg>
  )
);

DetailsOutlineLogo.displayName = "DetailsOutlineLogo";

export const DetailsOutlineLogoMetadata = {
  id: "details-outline",
  baseId: "details-outline",
  variant: "default",
  name: "Details Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DetailsOutlineLogo;
