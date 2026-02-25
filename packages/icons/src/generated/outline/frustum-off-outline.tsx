/**
 * Auto-generated logo component: Frustum Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FrustumOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FrustumOffOutlineLogo = React.forwardRef<SVGSVGElement, FrustumOffOutlineLogoProps>(
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
      <path d="M7.72 3.728l3.484 -1.558a1.95 1.95 0 0 1 1.59 0l4.496 2.01c.554 .246 .963 .736 1.112 1.328l2.538 10.158c.103 .412 .07 .832 -.075 1.206m-2.299 1.699l-5.725 2.738a1.945 1.945 0 0 1 -1.682 0l-7.035 -3.365a1.99 1.99 0 0 1 -1.064 -2.278l2.52 -10.08" />
  <path d="M18 4.82l-5.198 2.324a1.963 1.963 0 0 1 -1.602 0" />
  <path d="M12 7.32v.68m0 4v9.5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

FrustumOffOutlineLogo.displayName = "FrustumOffOutlineLogo";

export const FrustumOffOutlineLogoMetadata = {
  id: "frustum-off-outline",
  baseId: "frustum-off-outline",
  variant: "default",
  name: "Frustum Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FrustumOffOutlineLogo;
