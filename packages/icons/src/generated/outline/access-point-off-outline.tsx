/**
 * Auto-generated logo component: Access Point Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AccessPointOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AccessPointOffOutlineLogo = React.forwardRef<SVGSVGElement, AccessPointOffOutlineLogoProps>(
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
      <path d="M3 3l18 18" />
  <path d="M14.828 9.172a4 4 0 0 1 1.172 2.828" />
  <path d="M17.657 6.343a8 8 0 0 1 1.635 8.952" />
  <path d="M9.168 14.828a4 4 0 0 1 0 -5.656" />
  <path d="M6.337 17.657a8 8 0 0 1 0 -11.314" />
    </svg>
  )
);

AccessPointOffOutlineLogo.displayName = "AccessPointOffOutlineLogo";

export const AccessPointOffOutlineLogoMetadata = {
  id: "access-point-off-outline",
  baseId: "access-point-off-outline",
  variant: "default",
  name: "Access Point Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AccessPointOffOutlineLogo;
