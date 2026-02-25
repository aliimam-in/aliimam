/**
 * Auto-generated logo component: Accessible Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AccessibleOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AccessibleOffOutlineLogo = React.forwardRef<SVGSVGElement, AccessibleOffOutlineLogoProps>(
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
      <path d="M10 16.5l2 -3l2 3m-2 -3v-1.5m2.627 -1.376l.373 -.124m-6 0l2.231 .744" />
  <path d="M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73" />
  <path d="M12 8a.5 .5 0 1 0 -.5 -.5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

AccessibleOffOutlineLogo.displayName = "AccessibleOffOutlineLogo";

export const AccessibleOffOutlineLogoMetadata = {
  id: "accessible-off-outline",
  baseId: "accessible-off-outline",
  variant: "default",
  name: "Accessible Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AccessibleOffOutlineLogo;
