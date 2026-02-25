/**
 * Auto-generated logo component: Border Left Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BorderLeftPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BorderLeftPlusOutlineLogo = React.forwardRef<SVGSVGElement, BorderLeftPlusOutlineLogoProps>(
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
      <path d="M4 20v-16" />
  <path d="M8 4v.01" />
  <path d="M12 4v.01" />
  <path d="M16 4v.01" />
  <path d="M20 4v.01" />
  <path d="M20 8v.01" />
  <path d="M20 12v.01" />
  <path d="M20 16v.01" />
  <path d="M8 20v.01" />
  <path d="M12 20v.01" />
  <path d="M16 20v.01" />
  <path d="M20 20v.01" />
  <path d="M9 12h6" />
  <path d="M12 9v6" />
    </svg>
  )
);

BorderLeftPlusOutlineLogo.displayName = "BorderLeftPlusOutlineLogo";

export const BorderLeftPlusOutlineLogoMetadata = {
  id: "border-left-plus-outline",
  baseId: "border-left-plus-outline",
  variant: "default",
  name: "Border Left Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BorderLeftPlusOutlineLogo;
