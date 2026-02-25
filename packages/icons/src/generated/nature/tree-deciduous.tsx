/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TreeDeciduousProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TreeDeciduous = React.forwardRef<SVGSVGElement, TreeDeciduousProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z" />
  <path d="M12 19v3" />
    </svg>
  )
);
TreeDeciduous.displayName = "TreeDeciduous";
export const TreeDeciduousMetadata = { 
  id: "tree-deciduous", 
  baseId: "tree-deciduous", 
  variant: "default", 
  name: "Tree Deciduous", 
  category: "nature", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TreeDeciduous;
