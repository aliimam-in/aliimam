/**
 * Auto-generated logo component: Octahedron Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface OctahedronOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const OctahedronOffOutlineLogo = React.forwardRef<SVGSVGElement, OctahedronOffOutlineLogoProps>(
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
      <path d="M6.771 6.77l-4.475 4.527a.984 .984 0 0 0 0 1.407l8.845 8.949a1.234 1.234 0 0 0 1.718 -.001l4.36 -4.412m2.002 -2.025l2.483 -2.512a.984 .984 0 0 0 0 -1.407l-8.845 -8.948a1.233 1.233 0 0 0 -1.718 0l-2.375 2.403" />
  <path d="M2 12c.004 .086 .103 .178 .296 .246l8.845 2.632c.459 .163 1.259 .163 1.718 0l1.544 -.46m3.094 -.92l4.207 -1.252c.195 -.07 .294 -.156 .296 -.243" />
  <path d="M12 2.12v5.88m0 4v9.88" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

OctahedronOffOutlineLogo.displayName = "OctahedronOffOutlineLogo";

export const OctahedronOffOutlineLogoMetadata = {
  id: "octahedron-off-outline",
  baseId: "octahedron-off-outline",
  variant: "default",
  name: "Octahedron Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default OctahedronOffOutlineLogo;
