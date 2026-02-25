/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CopyrightFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CopyrightFilled = React.forwardRef<SVGSVGElement, CopyrightFilledProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-2.34 5.659a4.016 4.016 0 0 0 -5.543 .23a3.993 3.993 0 0 0 0 5.542a4.016 4.016 0 0 0 5.543 .23a1 1 0 0 0 -1.32 -1.502c-.81 .711 -2.035 .66 -2.783 -.116a1.993 1.993 0 0 1 0 -2.766a2.016 2.016 0 0 1 2.783 -.116a1 1 0 0 0 1.32 -1.501z" />
    </svg>
  )
);
CopyrightFilled.displayName = "CopyrightFilled";
export const CopyrightFilledMetadata = { 
  id: "copyright_filled", 
  baseId: "copyright", 
  variant: "filled", 
  name: "Copyright", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CopyrightFilled;
