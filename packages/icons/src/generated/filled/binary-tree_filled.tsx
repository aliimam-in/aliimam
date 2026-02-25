/**
 * Auto-generated logo component: Binary Tree (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BinaryTreeFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BinaryTreeFilledLogo = React.forwardRef<SVGSVGElement, BinaryTreeFilledLogoProps>(
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
      <path d="M14 1a3 3 0 0 1 2.348 4.868l2 3.203q .317 -.071 .652 -.071a3 3 0 1 1 -2.347 1.132l-2 -3.203a3 3 0 0 1 -1.304 0l-2.001 3.203c.408 .513 .652 1.162 .652 1.868s-.244 1.356 -.653 1.868l2.002 3.203q .315 -.071 .651 -.071a3 3 0 1 1 -2.347 1.132l-2.003 -3.203a3 3 0 0 1 -1.302 0l-2.002 3.203a3 3 0 1 1 -1.696 -1.06l2.002 -3.204a3 3 0 0 1 2.998 -4.798l2.002 -3.202a3 3 0 0 1 2.348 -4.868" />
    </svg>
  )
);

BinaryTreeFilledLogo.displayName = "BinaryTreeFilledLogo";

export const BinaryTreeFilledLogoMetadata = {
  id: "binary-tree_filled",
  baseId: "binary-tree",
  variant: "filled",
  name: "Binary Tree",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BinaryTreeFilledLogo;
