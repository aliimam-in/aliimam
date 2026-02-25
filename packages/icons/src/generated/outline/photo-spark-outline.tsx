/**
 * Auto-generated logo component: Photo Spark Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhotoSparkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhotoSparkOutlineLogo = React.forwardRef<SVGSVGElement, PhotoSparkOutlineLogoProps>(
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
      <path d="M15 8h.01" />
  <path d="M12 21h-6a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6" />
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3.993 3.993" />
  <path d="M14 14l1 -1c.47 -.452 .995 -.675 1.52 -.67" />
  <path d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" />
    </svg>
  )
);

PhotoSparkOutlineLogo.displayName = "PhotoSparkOutlineLogo";

export const PhotoSparkOutlineLogoMetadata = {
  id: "photo-spark-outline",
  baseId: "photo-spark-outline",
  variant: "default",
  name: "Photo Spark Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhotoSparkOutlineLogo;
