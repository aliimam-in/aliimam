/**
 * Auto-generated logo component: Crown Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CrownOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CrownOffOutlineLogo = React.forwardRef<SVGSVGElement, CrownOffOutlineLogoProps>(
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
      <path d="M18 18h-13l-1.865 -9.327a.25 .25 0 0 1 .4 -.244l4.465 3.571l1.6 -2.4m1.596 -2.394l.804 -1.206l4 6l4.464 -3.571a.25 .25 0 0 1 .401 .244l-1.363 6.818" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CrownOffOutlineLogo.displayName = "CrownOffOutlineLogo";

export const CrownOffOutlineLogoMetadata = {
  id: "crown-off-outline",
  baseId: "crown-off-outline",
  variant: "default",
  name: "Crown Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CrownOffOutlineLogo;
