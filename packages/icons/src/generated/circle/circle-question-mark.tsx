/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleQuestionMarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleQuestionMark = React.forwardRef<SVGSVGElement, CircleQuestionMarkProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="10" />
  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
  <path d="M12 17h.01" />
    </svg>
  )
);
CircleQuestionMark.displayName = "CircleQuestionMark";
export const CircleQuestionMarkMetadata = { id: "circle-question-mark", baseId: "circle-question-mark", variant: "default", name: "Circle Question Mark", category: "circle", tags: [], viewBox: "0 0 24 24" } as const;
export default CircleQuestionMark;
