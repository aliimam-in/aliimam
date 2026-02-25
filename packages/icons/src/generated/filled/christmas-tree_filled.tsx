/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChristmasTreeFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChristmasTreeFilled = React.forwardRef<SVGSVGElement, ChristmasTreeFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M15 19v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-1zm-10 -1c-.89 0 -1.337 -1.077 -.707 -1.707l2.855 -2.857l-1.464 -.487a1 1 0 0 1 -.472 -1.565l.08 -.091l3.019 -3.02l-.758 -.379a1 1 0 0 1 -.343 -1.507l.083 -.094l4 -4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 -.26 1.601l-.759 .379l3.02 3.02a1 1 0 0 1 -.279 1.61l-.113 .046l-1.465 .487l2.856 2.857c.603 .602 .22 1.614 -.593 1.701l-.114 .006z" />
    </svg>
  )
);
ChristmasTreeFilled.displayName = "ChristmasTreeFilled";
export const ChristmasTreeFilledMetadata = { id: "christmas-tree_filled", baseId: "christmas-tree", variant: "filled", name: "Christmas Tree", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default ChristmasTreeFilled;
