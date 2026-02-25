/**
 * Auto-generated logo component: Social Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SocialOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SocialOutlineLogo = React.forwardRef<SVGSVGElement, SocialOutlineLogoProps>(
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
  <path d="M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M9 14a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M12 7l0 4" />
  <path d="M6.7 17.8l2.8 -2" />
  <path d="M17.3 17.8l-2.8 -2" />
    </svg>
  )
);

SocialOutlineLogo.displayName = "SocialOutlineLogo";

export const SocialOutlineLogoMetadata = {
  id: "social-outline",
  baseId: "social-outline",
  variant: "default",
  name: "Social Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SocialOutlineLogo;
