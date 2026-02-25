/**
 * Auto-generated logo component: Hexagon 3d Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Hexagon3dOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Hexagon3dOutlineLogo = React.forwardRef<SVGSVGElement, Hexagon3dOutlineLogoProps>(
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
      <path d="M19 6.844a2.007 2.007 0 0 1 1 1.752v6.555c0 .728 -.394 1.399 -1.03 1.753l-6 3.844a2 2 0 0 1 -1.942 0l-6 -3.844a2.007 2.007 0 0 1 -1.029 -1.752v-6.556c0 -.729 .394 -1.4 1.029 -1.753l6 -3.583a2.05 2.05 0 0 1 2 0l6 3.584h-.03l.002 0" />
  <path d="M12 16.5v4.5" />
  <path d="M4.5 7.5l3.5 2.5" />
  <path d="M16 10l4 -2.5" />
  <path d="M12 7.5v4.5l-4 2" />
  <path d="M12 12l4 2" />
  <path d="M12 16.5l4 -2.5v-4l-4 -2.5l-4 2.5v4l4 2.5" />
    </svg>
  )
);

Hexagon3dOutlineLogo.displayName = "Hexagon3dOutlineLogo";

export const Hexagon3dOutlineLogoMetadata = {
  id: "hexagon-3d-outline",
  baseId: "hexagon-3d-outline",
  variant: "default",
  name: "Hexagon 3d Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Hexagon3dOutlineLogo;
