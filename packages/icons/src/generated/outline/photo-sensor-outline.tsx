/**
 * Auto-generated logo component: Photo Sensor Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhotoSensorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhotoSensorOutlineLogo = React.forwardRef<SVGSVGElement, PhotoSensorOutlineLogoProps>(
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
      <path d="M17 5h2a2 2 0 0 1 2 2v2" />
  <path d="M21 15v2a2 2 0 0 1 -2 2h-2" />
  <path d="M7 19h-2a2 2 0 0 1 -2 -2v-2" />
  <path d="M3 9v-2a2 2 0 0 1 2 -2h2" />
  <path d="M7 10a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1l0 -4" />
    </svg>
  )
);

PhotoSensorOutlineLogo.displayName = "PhotoSensorOutlineLogo";

export const PhotoSensorOutlineLogoMetadata = {
  id: "photo-sensor-outline",
  baseId: "photo-sensor-outline",
  variant: "default",
  name: "Photo Sensor Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhotoSensorOutlineLogo;
