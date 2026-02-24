/**
 * Auto-generated logo component: Share (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixShareLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixShareLogo = React.forwardRef<SVGSVGElement, MixShareLogoProps>(
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
      <path d="M12 2v13" />
  <path d="m16 6-4-4-4 4" />
  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    </svg>
  )
);

MixShareLogo.displayName = "MixShareLogo";

export const MixShareLogoMetadata = {
  id: "share",
  baseId: "share",
  variant: "default",
  name: "Share",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixShareLogo;
