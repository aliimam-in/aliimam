/**
 * Auto-generated logo component: Capsule Horizontal Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CapsuleHorizontalFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CapsuleHorizontalFilledLogo = React.forwardRef<SVGSVGElement, CapsuleHorizontalFilledLogoProps>(
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
      <path d="M15 5h-6a7 7 0 1 0 0 14h6a7 7 0 0 0 7 -7l-.007 -.303a7 7 0 0 0 -6.993 -6.697z" />
    </svg>
  )
);

CapsuleHorizontalFilledLogo.displayName = "CapsuleHorizontalFilledLogo";

export const CapsuleHorizontalFilledLogoMetadata = {
  id: "capsule-horizontal-filled",
  baseId: "capsule-horizontal-filled",
  variant: "default",
  name: "Capsule Horizontal Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CapsuleHorizontalFilledLogo;
