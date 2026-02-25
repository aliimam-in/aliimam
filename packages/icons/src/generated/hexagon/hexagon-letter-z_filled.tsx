/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HexagonLetterZFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HexagonLetterZFilled = React.forwardRef<SVGSVGElement, HexagonLetterZFilledProps>(
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
      <path d="M13.666 1.429l6.75 3.98l.096 .063l.093 .078l.106 .074a3.22 3.22 0 0 1 1.284 2.39l.005 .204v7.284c0 1.175 -.643 2.256 -1.623 2.793l-6.804 4.302c-.98 .538 -2.166 .538 -3.2 -.032l-6.695 -4.237a3.23 3.23 0 0 1 -1.678 -2.826v-7.285c0 -1.106 .57 -2.128 1.476 -2.705l6.95 -4.098c1 -.552 2.214 -.552 3.24 .015m.334 5.571h-4a1 1 0 0 0 -1 1l.007 .117a1 1 0 0 0 .993 .883h2.382l-3.276 6.553a1 1 0 0 0 .894 1.447h4a1 1 0 0 0 1 -1l-.007 -.117a1 1 0 0 0 -.993 -.883h-2.382l3.276 -6.553a1 1 0 0 0 -.894 -1.447" />
    </svg>
  )
);
HexagonLetterZFilled.displayName = "HexagonLetterZFilled";
export const HexagonLetterZFilledMetadata = { 
  id: "hexagon-letter-z_filled", 
  baseId: "hexagon-letter-z", 
  variant: "filled", 
  name: "Hexagon Letter Z", 
  category: "hexagon", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HexagonLetterZFilled;
