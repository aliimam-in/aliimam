/**
 * Auto-generated logo component: Tools Kitchen 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ToolsKitchen3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ToolsKitchen3OutlineLogo = React.forwardRef<SVGSVGElement, ToolsKitchen3OutlineLogoProps>(
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
      <path d="M7 4v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
  <path d="M14 8a3 4 0 1 0 6 0a3 4 0 1 0 -6 0" />
  <path d="M17 12v9" />
    </svg>
  )
);

ToolsKitchen3OutlineLogo.displayName = "ToolsKitchen3OutlineLogo";

export const ToolsKitchen3OutlineLogoMetadata = {
  id: "tools-kitchen-3-outline",
  baseId: "tools-kitchen-3-outline",
  variant: "default",
  name: "Tools Kitchen 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ToolsKitchen3OutlineLogo;
