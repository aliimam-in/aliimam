/**
 * Auto-generated logo component: Social Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SocialOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SocialOffOutlineLogo = React.forwardRef<SVGSVGElement, SocialOffOutlineLogoProps>(
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
      <path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M17.57 17.602a2 2 0 0 0 2.83 2.827" />
  <path d="M11.113 11.133a3 3 0 1 0 3.765 3.715" />
  <path d="M12 7v1" />
  <path d="M6.7 17.8l2.8 -2" />
  <path d="M17.3 17.8l-2.8 -2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

SocialOffOutlineLogo.displayName = "SocialOffOutlineLogo";

export const SocialOffOutlineLogoMetadata = {
  id: "social-off-outline",
  baseId: "social-off-outline",
  variant: "default",
  name: "Social Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SocialOffOutlineLogo;
