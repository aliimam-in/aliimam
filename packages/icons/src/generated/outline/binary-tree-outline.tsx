/**
 * Auto-generated logo component: Binary Tree Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BinaryTreeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BinaryTreeOutlineLogo = React.forwardRef<SVGSVGElement, BinaryTreeOutlineLogoProps>(
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
      <path d="M6 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M16 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M16 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M11 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M21 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M5.058 18.306l2.88 -4.606" />
  <path d="M10.061 10.303l2.877 -4.604" />
  <path d="M10.065 13.705l2.876 4.6" />
  <path d="M15.063 5.7l2.881 4.61" />
    </svg>
  )
);

BinaryTreeOutlineLogo.displayName = "BinaryTreeOutlineLogo";

export const BinaryTreeOutlineLogoMetadata = {
  id: "binary-tree-outline",
  baseId: "binary-tree-outline",
  variant: "default",
  name: "Binary Tree Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BinaryTreeOutlineLogo;
