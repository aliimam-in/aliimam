/**
 * Auto-generated logo component: Flag Spark Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlagSparkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlagSparkOutlineLogo = React.forwardRef<SVGSVGElement, FlagSparkOutlineLogoProps>(
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
      <path d="M14.165 15.249a5 5 0 0 1 -2.165 -1.249a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v6.5" />
  <path d="M5 21v-7" />
  <path d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" />
    </svg>
  )
);

FlagSparkOutlineLogo.displayName = "FlagSparkOutlineLogo";

export const FlagSparkOutlineLogoMetadata = {
  id: "flag-spark-outline",
  baseId: "flag-spark-outline",
  variant: "default",
  name: "Flag Spark Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlagSparkOutlineLogo;
