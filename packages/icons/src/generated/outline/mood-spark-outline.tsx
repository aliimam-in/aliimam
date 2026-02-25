/**
 * Auto-generated logo component: Mood Spark Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodSparkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodSparkOutlineLogo = React.forwardRef<SVGSVGElement, MoodSparkOutlineLogoProps>(
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
      <path d="M21 12a9 9 0 1 0 -8.994 9" />
  <path d="M9 10h.01" />
  <path d="M15 10h.01" />
  <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
  <path d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" />
    </svg>
  )
);

MoodSparkOutlineLogo.displayName = "MoodSparkOutlineLogo";

export const MoodSparkOutlineLogoMetadata = {
  id: "mood-spark-outline",
  baseId: "mood-spark-outline",
  variant: "default",
  name: "Mood Spark Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodSparkOutlineLogo;
