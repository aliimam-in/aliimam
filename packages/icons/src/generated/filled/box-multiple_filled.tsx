/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BoxMultipleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BoxMultipleFilled = React.forwardRef<SVGSVGElement, BoxMultipleFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M6 5.667a3.667 3.667 0 0 1 3.667 -3.667h8.666a3.667 3.667 0 0 1 3.667 3.667v8.666a3.667 3.667 0 0 1 -3.667 3.667h-8.666a3.667 3.667 0 0 1 -3.667 -3.667z" />
  <path d="M2 9c0 -1.094 .533 -1.828 1.514 -2.374a1 1 0 1 1 .972 1.748c-.398 .221 -.486 .342 -.486 .626v10c0 .548 .452 1 1 1h9.998c.32 0 .618 -.154 .805 -.407l.065 -.1a1 1 0 1 1 1.738 .99a3 3 0 0 1 -2.606 1.517h-10c-1.652 0 -3 -1.348 -3 -3z" />
    </svg>
  )
);
BoxMultipleFilled.displayName = "BoxMultipleFilled";
export const BoxMultipleFilledMetadata = { id: "box-multiple_filled", baseId: "box-multiple", variant: "filled", name: "Box Multiple", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default BoxMultipleFilled;
