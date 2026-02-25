/**
 * Auto-generated logo component: Gizmo Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GizmoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GizmoOutlineLogo = React.forwardRef<SVGSVGElement, GizmoOutlineLogoProps>(
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
      <path d="M20 19l-8 -5.5l-8 5.5" />
  <path d="M12 4v9.5" />
  <path d="M11 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M3 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M19 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

GizmoOutlineLogo.displayName = "GizmoOutlineLogo";

export const GizmoOutlineLogoMetadata = {
  id: "gizmo-outline",
  baseId: "gizmo-outline",
  variant: "default",
  name: "Gizmo Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GizmoOutlineLogo;
