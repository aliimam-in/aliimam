/**
 * Auto-generated logo component: Photo Sensor 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhotoSensor3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhotoSensor3OutlineLogo = React.forwardRef<SVGSVGElement, PhotoSensor3OutlineLogoProps>(
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
      <path d="M17 4h1a2 2 0 0 1 2 2v1" />
  <path d="M20 17v1a2 2 0 0 1 -2 2h-1" />
  <path d="M7 20h-1a2 2 0 0 1 -2 -2v-1" />
  <path d="M4 7v-1a2 2 0 0 1 2 -2h1" />
  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M12 18v2" />
  <path d="M4 12h2" />
  <path d="M12 4v2" />
  <path d="M20 12h-2" />
    </svg>
  )
);

PhotoSensor3OutlineLogo.displayName = "PhotoSensor3OutlineLogo";

export const PhotoSensor3OutlineLogoMetadata = {
  id: "photo-sensor-3-outline",
  baseId: "photo-sensor-3-outline",
  variant: "default",
  name: "Photo Sensor 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhotoSensor3OutlineLogo;
