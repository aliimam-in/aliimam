/**
 * Auto-generated logo component: Rotate 3d Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Rotate3dOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Rotate3dOutlineLogo = React.forwardRef<SVGSVGElement, Rotate3dOutlineLogoProps>(
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
      <path d="M12 3a7 7 0 0 1 7 7v4l-3 -3" />
  <path d="M22 11l-3 3" />
  <path d="M8 15.5l-5 -3l5 -3l5 3v5.5l-5 3l0 -5.5" />
  <path d="M3 12.5v5.5l5 3" />
  <path d="M8 15.545l5 -3.03" />
    </svg>
  )
);

Rotate3dOutlineLogo.displayName = "Rotate3dOutlineLogo";

export const Rotate3dOutlineLogoMetadata = {
  id: "rotate-3d-outline",
  baseId: "rotate-3d-outline",
  variant: "default",
  name: "Rotate 3d Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Rotate3dOutlineLogo;
