/**
 * Auto-generated logo component: First Aid Kit Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FirstAidKitOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FirstAidKitOutlineLogo = React.forwardRef<SVGSVGElement, FirstAidKitOutlineLogoProps>(
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
      <path d="M8 8v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
  <path d="M4 10a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -8" />
  <path d="M10 14h4" />
  <path d="M12 12v4" />
    </svg>
  )
);

FirstAidKitOutlineLogo.displayName = "FirstAidKitOutlineLogo";

export const FirstAidKitOutlineLogoMetadata = {
  id: "first-aid-kit-outline",
  baseId: "first-aid-kit-outline",
  variant: "default",
  name: "First Aid Kit Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FirstAidKitOutlineLogo;
