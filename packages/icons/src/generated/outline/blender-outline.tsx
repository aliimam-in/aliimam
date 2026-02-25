/**
 * Auto-generated logo component: Blender Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BlenderOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BlenderOutlineLogo = React.forwardRef<SVGSVGElement, BlenderOutlineLogoProps>(
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
      <path d="M9 10h-3a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h10.802a1 1 0 0 1 .984 1.179l-1.786 9.821" />
  <path d="M8 4l2 11" />
  <path d="M11 15h4a3 3 0 0 1 3 3v2a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-2a3 3 0 0 1 3 -3" />
  <path d="M12 4v-1h2v1" />
  <path d="M13 18v.01" />
    </svg>
  )
);

BlenderOutlineLogo.displayName = "BlenderOutlineLogo";

export const BlenderOutlineLogoMetadata = {
  id: "blender-outline",
  baseId: "blender-outline",
  variant: "default",
  name: "Blender Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BlenderOutlineLogo;
