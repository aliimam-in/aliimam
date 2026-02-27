/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChainlinkLinkFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChainlinkLinkFilled = React.forwardRef<SVGSVGElement, ChainlinkLinkFilledProps>(
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
      <path d="M3 8.17994V15.8299C3 16.4799 3.46 17.2599 4.03 17.5799L11.03 21.4699C11.56 21.7699 12.44 21.7699 12.97 21.4699L19.97 17.5799C20.54 17.2699 21 16.4799 21 15.8299V8.17994C21 7.52994 20.54 6.74994 19.97 6.42994L12.97 2.53994C12.44 2.23994 11.56 2.23994 11.03 2.53994L4.03 6.42994C3.46 6.73994 3 7.52994 3 8.17994Z" fill="currentColor"/>
    </svg>
  )
);
ChainlinkLinkFilled.displayName = "ChainlinkLinkFilled";
export const ChainlinkLinkFilledMetadata = { 
  id: "chainlink-link_filled", 
  baseId: "chainlink-link", 
  variant: "filled", 
  name: "Chainlink Link", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChainlinkLinkFilled;
