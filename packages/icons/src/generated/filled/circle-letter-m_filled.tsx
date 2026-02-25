/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleLetterMFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleLetterMFilled = React.forwardRef<SVGSVGElement, CircleLetterMFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m4 6c0 -1.014 -1.336 -1.384 -1.857 -.514l-2.143 3.57l-2.143 -3.57c-.521 -.87 -1.857 -.5 -1.857 .514v8a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-4.39l1.143 1.904l.074 .108a1 1 0 0 0 1.64 -.108l1.143 -1.904v4.39a1 1 0 0 0 2 0z" />
    </svg>
  )
);
CircleLetterMFilled.displayName = "CircleLetterMFilled";
export const CircleLetterMFilledMetadata = { id: "circle-letter-m_filled", baseId: "circle-letter-m", variant: "filled", name: "Circle Letter M", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default CircleLetterMFilled;
