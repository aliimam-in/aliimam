/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FlareFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FlareFilled = React.forwardRef<SVGSVGElement, FlareFilledProps>(
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
      <path d="M11.106 2.553a1 1 0 0 1 1.788 0l2.851 5.701l5.702 2.852a1 1 0 0 1 .11 1.725l-.11 .063l-5.702 2.851l-2.85 5.702a1 1 0 0 1 -1.726 .11l-.063 -.11l-2.852 -5.702l-5.701 -2.85a1 1 0 0 1 -.11 -1.726l.11 -.063l5.701 -2.852z" />
    </svg>
  )
);
FlareFilled.displayName = "FlareFilled";
export const FlareFilledMetadata = { 
  id: "flare_filled", 
  baseId: "flare", 
  variant: "filled", 
  name: "Flare", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FlareFilled;
