/**
 * Auto-generated logo component: Crown (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CrownLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CrownLogo = React.forwardRef<SVGSVGElement, CrownLogoProps>(
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
      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
  <path d="M5 21h14" />
    </svg>
  )
);

CrownLogo.displayName = "CrownLogo";

export const CrownLogoMetadata = {
  id: "crown",
  baseId: "crown",
  variant: "default",
  name: "Crown",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CrownLogo;
