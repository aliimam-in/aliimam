/**
 * Auto-generated logo component: Bone Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoneOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoneOffOutlineLogo = React.forwardRef<SVGSVGElement, BoneOffOutlineLogoProps>(
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
      <path d="M12.5 8.502l.38 -.38a3 3 0 1 1 5.12 -2.122a3 3 0 1 1 -2.12 5.122l-.372 .372m-2.008 2.008l-2.378 2.378a3 3 0 1 1 -5.117 2.297l0 -.177l-.176 0a3 3 0 1 1 2.298 -5.115l2.378 -2.378" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BoneOffOutlineLogo.displayName = "BoneOffOutlineLogo";

export const BoneOffOutlineLogoMetadata = {
  id: "bone-off-outline",
  baseId: "bone-off-outline",
  variant: "default",
  name: "Bone Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoneOffOutlineLogo;
