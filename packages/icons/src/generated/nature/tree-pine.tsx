/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TreePineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TreePine = React.forwardRef<SVGSVGElement, TreePineProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z" />
  <path d="M12 22v-3" />
    </svg>
  )
);
TreePine.displayName = "TreePine";
export const TreePineMetadata = { id: "tree-pine", baseId: "tree-pine", variant: "default", name: "Tree Pine", category: "nature", tags: [], viewBox: "0 0 24 24" } as const;
export default TreePine;
