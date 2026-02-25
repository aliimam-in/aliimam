/**
 * Auto-generated logo component: Scale (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScaleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScaleLogo = React.forwardRef<SVGSVGElement, ScaleLogoProps>(
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
      <path d="M12 3v18" />
  <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" />
  <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" />
  <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" />
  <path d="M7 21h10" />
    </svg>
  )
);

ScaleLogo.displayName = "ScaleLogo";

export const ScaleLogoMetadata = {
  id: "scale",
  baseId: "scale",
  variant: "default",
  name: "Scale",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScaleLogo;
