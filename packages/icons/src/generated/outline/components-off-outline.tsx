/**
 * Auto-generated logo component: Components Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ComponentsOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ComponentsOffOutlineLogo = React.forwardRef<SVGSVGElement, ComponentsOffOutlineLogoProps>(
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
  <path d="M18.5 14.5l2.5 -2.5l-3 -3l-2.5 2.5" />
  <path d="M12.499 8.501l2.501 -2.501l-3 -3l-2.5 2.5" />
  <path d="M9 18l3 3l3 -3l-3 -3l-3 3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ComponentsOffOutlineLogo.displayName = "ComponentsOffOutlineLogo";

export const ComponentsOffOutlineLogoMetadata = {
  id: "components-off-outline",
  baseId: "components-off-outline",
  variant: "default",
  name: "Components Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ComponentsOffOutlineLogo;
