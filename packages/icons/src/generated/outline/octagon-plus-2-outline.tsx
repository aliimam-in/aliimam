/**
 * Auto-generated logo component: Octagon Plus 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface OctagonPlus2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const OctagonPlus2OutlineLogo = React.forwardRef<SVGSVGElement, OctagonPlus2OutlineLogoProps>(
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
      <path d="M13.023 21.74l-.221 .095c-.512 .22 -1.092 .22 -1.604 0l-5.575 -2.389a2.036 2.036 0 0 1 -1.07 -1.07l-2.388 -5.574a2.036 2.036 0 0 1 0 -1.604l2.389 -5.575c.206 -.48 .589 -.863 1.07 -1.07l5.574 -2.388a2.036 2.036 0 0 1 1.604 0l5.575 2.389c.48 .206 .863 .589 1.07 1.07l2.388 5.574c.22 .512 .22 1.092 0 1.604l-.081 .19" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

OctagonPlus2OutlineLogo.displayName = "OctagonPlus2OutlineLogo";

export const OctagonPlus2OutlineLogoMetadata = {
  id: "octagon-plus-2-outline",
  baseId: "octagon-plus-2-outline",
  variant: "default",
  name: "Octagon Plus 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default OctagonPlus2OutlineLogo;
