/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChefHatProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChefHat = React.forwardRef<SVGSVGElement, ChefHatProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
  <path d="M6 17h12" />
    </svg>
  )
);
ChefHat.displayName = "ChefHat";
export const ChefHatMetadata = { id: "chef-hat", baseId: "chef-hat", variant: "default", name: "Chef Hat", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default ChefHat;
