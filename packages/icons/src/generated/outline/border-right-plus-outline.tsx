/**
 * Auto-generated logo component: Border Right Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BorderRightPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BorderRightPlusOutlineLogo = React.forwardRef<SVGSVGElement, BorderRightPlusOutlineLogoProps>(
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
      <path d="M20 20v-16" />
  <path d="M16 4v.01" />
  <path d="M12 4v.01" />
  <path d="M8 4v.01" />
  <path d="M4 4v.01" />
  <path d="M4 8v.01" />
  <path d="M4 12v.01" />
  <path d="M4 16v.01" />
  <path d="M16 20v.01" />
  <path d="M12 20v.01" />
  <path d="M8 20v.01" />
  <path d="M4 20v.01" />
  <path d="M15 12h-6" />
  <path d="M12 9v6" />
    </svg>
  )
);

BorderRightPlusOutlineLogo.displayName = "BorderRightPlusOutlineLogo";

export const BorderRightPlusOutlineLogoMetadata = {
  id: "border-right-plus-outline",
  baseId: "border-right-plus-outline",
  variant: "default",
  name: "Border Right Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BorderRightPlusOutlineLogo;
