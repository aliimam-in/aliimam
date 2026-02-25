/**
 * Auto-generated logo component: Bone (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoneLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoneLogo = React.forwardRef<SVGSVGElement, BoneLogoProps>(
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
      <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" />
    </svg>
  )
);

BoneLogo.displayName = "BoneLogo";

export const BoneLogoMetadata = {
  id: "bone",
  baseId: "bone",
  variant: "default",
  name: "Bone",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoneLogo;
