/**
 * Auto-generated logo component: Fishing Hook (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FishingHookLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FishingHookLogo = React.forwardRef<SVGSVGElement, FishingHookLogoProps>(
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
      <path d="m17.586 11.414-5.93 5.93a1 1 0 0 1-8-8l3.137-3.137a.707.707 0 0 1 1.207.5V10" />
  <path d="M20.414 8.586 22 7" />
  <circle cx="19" cy="10" r="2" />
    </svg>
  )
);

FishingHookLogo.displayName = "FishingHookLogo";

export const FishingHookLogoMetadata = {
  id: "fishing-hook",
  baseId: "fishing-hook",
  variant: "default",
  name: "Fishing Hook",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FishingHookLogo;
