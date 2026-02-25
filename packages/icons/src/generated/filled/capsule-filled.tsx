/**
 * Auto-generated logo component: Capsule Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CapsuleFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CapsuleFilledLogo = React.forwardRef<SVGSVGElement, CapsuleFilledLogoProps>(
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
      <path d="M12 2l-.243 .004a7.004 7.004 0 0 0 -6.757 6.996v6a7 7 0 0 0 7 7l.243 -.004a7.004 7.004 0 0 0 6.757 -6.996v-6a7 7 0 0 0 -7 -7z" />
    </svg>
  )
);

CapsuleFilledLogo.displayName = "CapsuleFilledLogo";

export const CapsuleFilledLogoMetadata = {
  id: "capsule-filled",
  baseId: "capsule-filled",
  variant: "default",
  name: "Capsule Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CapsuleFilledLogo;
