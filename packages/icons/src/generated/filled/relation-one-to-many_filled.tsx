/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RelationOneToManyFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RelationOneToManyFilled = React.forwardRef<SVGSVGElement, RelationOneToManyFilledProps>(
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
      <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-4.2 5.4c-.577 -.769 -1.8 -.361 -1.8 .6v4a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-1l1.2 1.6c.577 .769 1.8 .361 1.8 -.6v-4a1 1 0 0 0 -1 -1l-.117 .007a1 1 0 0 0 -.883 .993v1zm-6.8 -.4h-1a1 1 0 1 0 0 2v3a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1m3 3.5a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -3a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1" />
    </svg>
  )
);
RelationOneToManyFilled.displayName = "RelationOneToManyFilled";
export const RelationOneToManyFilledMetadata = { 
  id: "relation-one-to-many_filled", 
  baseId: "relation-one-to-many", 
  variant: "filled", 
  name: "Relation One To Many", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RelationOneToManyFilled;
