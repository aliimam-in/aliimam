/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FigmaRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FigmaRounded = React.forwardRef<SVGSVGElement, FigmaRoundedProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12 2H8.70005C6.80005 2 5.30005 3.5 5.30005 5.3C5.30005 7.1 6.80005 8.6 8.60005 8.6H12V2Z"   strokeMiterlimit="10"/>
<path d="M11.9999 8.70001H8.6999C6.8999 8.70001 5.3999 10.2 5.3999 12C5.3999 13.8 6.8999 15.3 8.6999 15.3H11.9999V8.70001Z"   strokeMiterlimit="10"/>
<path d="M11.9999 15.3H8.6999C6.8999 15.3 5.3999 16.8 5.3999 18.6C5.3999 20.4 6.8999 21.9 8.6999 21.9C10.4999 21.9 11.9999 20.4 11.9999 18.6V15.3Z"   strokeMiterlimit="10"/>
<path d="M12 2H15.3C17.1 2 18.6 3.5 18.6 5.3C18.6 7.1 17.1 8.6 15.3 8.6H12V2Z"   strokeMiterlimit="10"/>
<path d="M15.3 8.70001C17.1 8.70001 18.6 10.2 18.6 12C18.6 13.8 17.1 15.3 15.3 15.3C13.5 15.3 12 13.8 12 12C12 10.2 13.5 8.70001 15.3 8.70001Z"   strokeMiterlimit="10"/>
    </svg>
  )
);
FigmaRounded.displayName = "FigmaRounded";
export const FigmaRoundedMetadata = { 
  id: "figma_rounded", 
  baseId: "figma", 
  variant: "rounded", 
  name: "Figma", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FigmaRounded;
