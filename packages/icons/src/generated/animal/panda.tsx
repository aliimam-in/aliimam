/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PandaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Panda = React.forwardRef<SVGSVGElement, PandaProps>(
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
      <path d="M11.25 17.25h1.5L12 18z" />
  <path d="m15 12 2 2" />
  <path d="M18 6.5a.5.5 0 0 0-.5-.5" />
  <path d="M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5 8.35 8.35 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5 2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83" />
  <path d="M6 6.5a.495.495 0 0 1 .5-.5" />
  <path d="m9 12-2 2" />
    </svg>
  )
);
Panda.displayName = "Panda";
export const PandaMetadata = { 
  id: "panda", 
  baseId: "panda", 
  variant: "default", 
  name: "Panda", 
  category: "animal", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Panda;
