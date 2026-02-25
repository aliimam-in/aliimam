/**
 * Auto-generated logo component: Octahedron Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface OctahedronPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const OctahedronPlusOutlineLogo = React.forwardRef<SVGSVGElement, OctahedronPlusOutlineLogoProps>(
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
      <path d="M21.498 12.911l.206 -.208a.984 .984 0 0 0 0 -1.407l-8.845 -8.948a1.233 1.233 0 0 0 -1.718 0l-8.845 8.949a.984 .984 0 0 0 0 1.407l8.845 8.949a1.234 1.234 0 0 0 1.718 -.001l.08 -.081" />
  <path d="M2 12c.004 .086 .103 .178 .296 .246l8.845 2.632c.459 .163 1.259 .163 1.718 0l2.634 -.784m5.41 -1.61l.801 -.238c.195 -.07 .294 -.156 .296 -.243" />
  <path d="M12 2.12v19.76" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

OctahedronPlusOutlineLogo.displayName = "OctahedronPlusOutlineLogo";

export const OctahedronPlusOutlineLogoMetadata = {
  id: "octahedron-plus-outline",
  baseId: "octahedron-plus-outline",
  variant: "default",
  name: "Octahedron Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default OctahedronPlusOutlineLogo;
