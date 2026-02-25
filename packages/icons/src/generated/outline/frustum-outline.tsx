/**
 * Auto-generated logo component: Frustum Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FrustumOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FrustumOutlineLogo = React.forwardRef<SVGSVGElement, FrustumOutlineLogoProps>(
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
      <path d="M18.402 5.508l2.538 10.158a1.99 1.99 0 0 1 -1.064 2.278l-7.036 3.366a1.945 1.945 0 0 1 -1.682 0l-7.035 -3.365a1.99 1.99 0 0 1 -1.064 -2.278l2.539 -10.159a1.98 1.98 0 0 1 1.11 -1.328l4.496 -2.01a1.95 1.95 0 0 1 1.59 0l4.496 2.01c.554 .246 .963 .736 1.112 1.328" />
  <path d="M18 4.82l-5.198 2.324a1.963 1.963 0 0 1 -1.602 0l-5.2 -2.325" />
  <path d="M12 7.32v14.18" />
    </svg>
  )
);

FrustumOutlineLogo.displayName = "FrustumOutlineLogo";

export const FrustumOutlineLogoMetadata = {
  id: "frustum-outline",
  baseId: "frustum-outline",
  variant: "default",
  name: "Frustum Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FrustumOutlineLogo;
