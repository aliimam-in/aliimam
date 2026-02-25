/**
 * Auto-generated logo component: Tools Kitchen 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ToolsKitchen2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ToolsKitchen2OutlineLogo = React.forwardRef<SVGSVGElement, ToolsKitchen2OutlineLogoProps>(
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
      <path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12m0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
    </svg>
  )
);

ToolsKitchen2OutlineLogo.displayName = "ToolsKitchen2OutlineLogo";

export const ToolsKitchen2OutlineLogoMetadata = {
  id: "tools-kitchen-2-outline",
  baseId: "tools-kitchen-2-outline",
  variant: "default",
  name: "Tools Kitchen 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ToolsKitchen2OutlineLogo;
