/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HexagonLetterNFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HexagonLetterNFilled = React.forwardRef<SVGSVGElement, HexagonLetterNFilledProps>(
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
      <path d="M13.666 1.429l6.75 3.98l.096 .063l.093 .078l.106 .074a3.22 3.22 0 0 1 1.284 2.39l.005 .204v7.284c0 1.175 -.643 2.256 -1.623 2.793l-6.804 4.302c-.98 .538 -2.166 .538 -3.2 -.032l-6.695 -4.237a3.23 3.23 0 0 1 -1.678 -2.826v-7.285c0 -1.106 .57 -2.128 1.476 -2.705l6.95 -4.098c1 -.552 2.214 -.552 3.24 .015m-2.772 6.124c-.471 -.944 -1.894 -.608 -1.894 .447v8a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-3.764l2.106 4.211c.471 .944 1.894 .608 1.894 -.447v-8a1 1 0 0 0 -1 -1l-.117 .007a1 1 0 0 0 -.883 .993v3.764z" />
    </svg>
  )
);
HexagonLetterNFilled.displayName = "HexagonLetterNFilled";
export const HexagonLetterNFilledMetadata = { 
  id: "hexagon-letter-n_filled", 
  baseId: "hexagon-letter-n", 
  variant: "filled", 
  name: "Hexagon Letter N", 
  category: "hexagon", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HexagonLetterNFilled;
