/**
 * Auto-generated logo component: Components Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ComponentsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ComponentsOutlineLogo = React.forwardRef<SVGSVGElement, ComponentsOutlineLogoProps>(
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
      <path d="M3 12l3 3l3 -3l-3 -3l-3 3" />
  <path d="M15 12l3 3l3 -3l-3 -3l-3 3" />
  <path d="M9 6l3 3l3 -3l-3 -3l-3 3" />
  <path d="M9 18l3 3l3 -3l-3 -3l-3 3" />
    </svg>
  )
);

ComponentsOutlineLogo.displayName = "ComponentsOutlineLogo";

export const ComponentsOutlineLogoMetadata = {
  id: "components-outline",
  baseId: "components-outline",
  variant: "default",
  name: "Components Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ComponentsOutlineLogo;
