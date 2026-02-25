/**
 * Auto-generated logo component: Photo Sensor 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhotoSensor2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhotoSensor2OutlineLogo = React.forwardRef<SVGSVGElement, PhotoSensor2OutlineLogoProps>(
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
      <path d="M17 5h2a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-2" />
  <path d="M7 19h-2a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
  <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    </svg>
  )
);

PhotoSensor2OutlineLogo.displayName = "PhotoSensor2OutlineLogo";

export const PhotoSensor2OutlineLogoMetadata = {
  id: "photo-sensor-2-outline",
  baseId: "photo-sensor-2-outline",
  variant: "default",
  name: "Photo Sensor 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhotoSensor2OutlineLogo;
