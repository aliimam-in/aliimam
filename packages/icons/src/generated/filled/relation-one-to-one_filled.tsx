/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RelationOneToOneFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RelationOneToOneFilled = React.forwardRef<SVGSVGElement, RelationOneToOneFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-10 5h-1a1 1 0 1 0 0 2v3a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1m7 0h-1a1 1 0 0 0 0 2v3a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1m-4 3.5a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -3a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1" />
    </svg>
  )
);
RelationOneToOneFilled.displayName = "RelationOneToOneFilled";
export const RelationOneToOneFilledMetadata = { id: "relation-one-to-one_filled", baseId: "relation-one-to-one", variant: "filled", name: "Relation One To One", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default RelationOneToOneFilled;
