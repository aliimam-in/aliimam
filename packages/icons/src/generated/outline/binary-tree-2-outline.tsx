/**
 * Auto-generated logo component: Binary Tree 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BinaryTree2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BinaryTree2OutlineLogo = React.forwardRef<SVGSVGElement, BinaryTree2OutlineLogoProps>(
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
      <path d="M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M7 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M21 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M14 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M12 8v8" />
  <path d="M6.316 12.496l4.368 -4.992" />
  <path d="M17.684 12.496l-4.366 -4.99" />
    </svg>
  )
);

BinaryTree2OutlineLogo.displayName = "BinaryTree2OutlineLogo";

export const BinaryTree2OutlineLogoMetadata = {
  id: "binary-tree-2-outline",
  baseId: "binary-tree-2-outline",
  variant: "default",
  name: "Binary Tree 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BinaryTree2OutlineLogo;
