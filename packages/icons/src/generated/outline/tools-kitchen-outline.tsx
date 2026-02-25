/**
 * Auto-generated logo component: Tools Kitchen Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ToolsKitchenOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ToolsKitchenOutlineLogo = React.forwardRef<SVGSVGElement, ToolsKitchenOutlineLogoProps>(
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
      <path d="M4 3h8l-1 9h-6l-1 -9" />
  <path d="M7 18h2v3h-2l0 -3" />
  <path d="M20 3v12h-5c-.023 -3.681 .184 -7.406 5 -12" />
  <path d="M20 15v6h-1v-3" />
  <path d="M8 12l0 6" />
    </svg>
  )
);

ToolsKitchenOutlineLogo.displayName = "ToolsKitchenOutlineLogo";

export const ToolsKitchenOutlineLogoMetadata = {
  id: "tools-kitchen-outline",
  baseId: "tools-kitchen-outline",
  variant: "default",
  name: "Tools Kitchen Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ToolsKitchenOutlineLogo;
