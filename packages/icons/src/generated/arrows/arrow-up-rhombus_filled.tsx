/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowUpRhombusFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowUpRhombusFilled = React.forwardRef<SVGSVGElement, ArrowUpRhombusFilledProps>(
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
      <path d="M12 2l.081 .003l.12 .017l.111 .03l.111 .044l.098 .052l.104 .074l.082 .073l3 3a1 1 0 1 1 -1.414 1.414l-1.293 -1.292v10.17l2.207 2.208a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1 -1.414 0l-2.5 -2.5a1 1 0 0 1 0 -1.414l2.207 -2.209v-10.169l-1.293 1.292a1 1 0 0 1 -1.32 .083l-.094 -.083a1 1 0 0 1 0 -1.414l3 -3l.112 -.097l.11 -.071l.062 -.031l.081 -.034l.076 -.024l.118 -.025l.058 -.007z" />
    </svg>
  )
);
ArrowUpRhombusFilled.displayName = "ArrowUpRhombusFilled";
export const ArrowUpRhombusFilledMetadata = { 
  id: "arrow-up-rhombus_filled", 
  baseId: "arrow-up-rhombus", 
  variant: "filled", 
  name: "Arrow Up Rhombus", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowUpRhombusFilled;
