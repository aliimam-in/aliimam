/**
 * Auto-generated logo component: Cake Slice (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CakeSliceLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CakeSliceLogo = React.forwardRef<SVGSVGElement, CakeSliceLogoProps>(
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
      <path d="M16 13H3" />
  <path d="M16 17H3" />
  <path d="m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6" />
  <circle cx="9" cy="7" r="2" />
    </svg>
  )
);

CakeSliceLogo.displayName = "CakeSliceLogo";

export const CakeSliceLogoMetadata = {
  id: "cake-slice",
  baseId: "cake-slice",
  variant: "default",
  name: "Cake Slice",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CakeSliceLogo;
