/**
 * Auto-generated logo component: Irregular Polyhedron Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface IrregularPolyhedronPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const IrregularPolyhedronPlusOutlineLogo = React.forwardRef<SVGSVGElement, IrregularPolyhedronPlusOutlineLogoProps>(
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
      <path d="M18 12l1.752 -6.13a1 1 0 0 0 -.592 -1.205l-6.282 -2.503a2.46 2.46 0 0 0 -1.756 0l-6.282 2.503a1 1 0 0 0 -.592 1.204l1.752 6.131l-1.752 6.13a1 1 0 0 0 .592 1.205l6.282 2.503a2.46 2.46 0 0 0 1.756 0l.221 -.088" />
  <path d="M4.5 5.5l6.622 2.33a2.35 2.35 0 0 0 1.756 0l6.622 -2.33" />
  <path d="M6 12l5.21 1.862a2.34 2.34 0 0 0 1.58 0l5.21 -1.862" />
  <path d="M12 22v-14" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

IrregularPolyhedronPlusOutlineLogo.displayName = "IrregularPolyhedronPlusOutlineLogo";

export const IrregularPolyhedronPlusOutlineLogoMetadata = {
  id: "irregular-polyhedron-plus-outline",
  baseId: "irregular-polyhedron-plus-outline",
  variant: "default",
  name: "Irregular Polyhedron Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default IrregularPolyhedronPlusOutlineLogo;
