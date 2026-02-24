/**
 * Auto-generated logo component: Link 2 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixLink2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixLink2Logo = React.forwardRef<SVGSVGElement, MixLink2LogoProps>(
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
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
  <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
  <line x1="8" x2="16" y1="12" y2="12" />
    </svg>
  )
);

MixLink2Logo.displayName = "MixLink2Logo";

export const MixLink2LogoMetadata = {
  id: "link-2",
  baseId: "link-2",
  variant: "default",
  name: "Link 2",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixLink2Logo;
