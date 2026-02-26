/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BongFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BongFilled = React.forwardRef<SVGSVGElement, BongFilledProps>(
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
      <path d="M14 2a1 1 0 0 1 0 2v5.587l2.293 -2.294a1 1 0 0 1 1.32 -.083l.094 .083l2 2a1 1 0 0 1 0 1.414l-3.116 3.115l.086 .233c.311 .907 .396 1.865 .263 2.794l-.062 .36l-.012 .052a6 6 0 0 1 -1.121 2.41l-.16 .199a6 6 0 0 1 -10.396 -2.378l-.068 -.288l-.009 -.046a6 6 0 0 1 2.833 -6.324l.055 -.031v-6.803a1 1 0 1 1 0 -2zm-2 2h-2v7.416a1 1 0 0 1 -.483 .856l-.117 .06a4 4 0 0 0 -2.4 3.668h8a4 4 0 0 0 -.486 -1.914a1 1 0 0 1 .17 -1.185l2.902 -2.901l-.586 -.586l-2.9 2.902a1 1 0 0 1 -1.067 .226l-.12 -.056a4 4 0 0 0 -.316 -.155a1 1 0 0 1 -.597 -.915z" />
    </svg>
  )
);
BongFilled.displayName = "BongFilled";
export const BongFilledMetadata = { 
  id: "bong_filled", 
  baseId: "bong", 
  variant: "filled", 
  name: "Bong", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BongFilled;
