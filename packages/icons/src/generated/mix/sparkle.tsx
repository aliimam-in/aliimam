/**
 * Auto-generated logo component: Sparkle (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SparkleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SparkleLogo = React.forwardRef<SVGSVGElement, SparkleLogoProps>(
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
      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
    </svg>
  )
);

SparkleLogo.displayName = "SparkleLogo";

export const SparkleLogoMetadata = {
  id: "sparkle",
  baseId: "sparkle",
  variant: "default",
  name: "Sparkle",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SparkleLogo;
