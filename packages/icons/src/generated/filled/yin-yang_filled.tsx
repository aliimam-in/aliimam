/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface YinYangFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const YinYangFilled = React.forwardRef<SVGSVGElement, YinYangFilledProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-9 1.732a8 8 0 0 0 4 14.928l.2 -.005a4 4 0 0 0 0 -7.99l-.2 -.005a4 4 0 0 1 -.2 -7.995l.2 -.005a7.995 7.995 0 0 0 -4 1.072zm4 1.428a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3" />
  <path d="M12 14.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0 -3" />
    </svg>
  )
);
YinYangFilled.displayName = "YinYangFilled";
export const YinYangFilledMetadata = { 
  id: "yin-yang_filled", 
  baseId: "yin-yang", 
  variant: "filled", 
  name: "Yin Yang", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default YinYangFilled;
