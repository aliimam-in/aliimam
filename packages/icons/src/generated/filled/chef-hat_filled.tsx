/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChefHatFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChefHatFilled = React.forwardRef<SVGSVGElement, ChefHatFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M19 19.002v1.998a1 1 0 0 1 -.883 .993l-.117 .007h-12a1 1 0 0 1 -1 -1v-1.994a1 1 0 0 1 1 -1l12 -.004a1 1 0 0 1 1 1" />
  <path d="M12 2a5 5 0 0 1 4.533 2.888l.06 .137l.136 -.009a5 5 0 0 1 4.99 3.477l.063 .213a5 5 0 0 1 -2.696 5.831l-.087 .037v1.428a1 1 0 0 1 -1 1l-12 .004a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.433l-.123 -.055a5 5 0 0 1 -2.6 -3.001l-.064 -.223a5 5 0 0 1 5.193 -6.27l.066 -.142a5 5 0 0 1 4.302 -2.877z" />
    </svg>
  )
);
ChefHatFilled.displayName = "ChefHatFilled";
export const ChefHatFilledMetadata = { id: "chef-hat_filled", baseId: "chef-hat", variant: "filled", name: "Chef Hat", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default ChefHatFilled;
