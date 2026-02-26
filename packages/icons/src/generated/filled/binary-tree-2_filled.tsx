/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BinaryTree2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BinaryTree2Filled = React.forwardRef<SVGSVGElement, BinaryTree2FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12 3a3 3 0 0 1 2.616 4.47l3.274 3.742a3 3 0 1 1 -1.505 1.318l-3.275 -3.743l-.11 .042v6.342a3.001 3.001 0 1 1 -2 0v-6.342l-.111 -.041l-3.274 3.742a3 3 0 1 1 -1.505 -1.318l3.273 -3.742a3 3 0 0 1 2.617 -4.47" />
    </svg>
  )
);
BinaryTree2Filled.displayName = "BinaryTree2Filled";
export const BinaryTree2FilledMetadata = { 
  id: "binary-tree-2_filled", 
  baseId: "binary-tree-2", 
  variant: "filled", 
  name: "Binary Tree 2", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BinaryTree2Filled;
