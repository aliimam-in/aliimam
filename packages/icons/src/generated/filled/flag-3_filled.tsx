/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Flag3FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Flag3Filled = React.forwardRef<SVGSVGElement, Flag3FilledProps>(
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
      <path d="M19 4c.852 0 1.297 .986 .783 1.623l-.076 .084l-3.792 3.793l3.792 3.793c.603 .602 .22 1.614 -.593 1.701l-.114 .006h-13v6a1 1 0 0 1 -.883 .993l-.117 .007a1 1 0 0 1 -.993 -.883l-.007 -.117v-16a1 1 0 0 1 .883 -.993l.117 -.007h14z" />
    </svg>
  )
);
Flag3Filled.displayName = "Flag3Filled";
export const Flag3FilledMetadata = { 
  id: "flag-3_filled", 
  baseId: "flag-3", 
  variant: "filled", 
  name: "Flag 3", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Flag3Filled;
