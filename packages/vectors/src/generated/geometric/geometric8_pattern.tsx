
'use client';
import React from 'react';

export interface Geometric8PatternProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric8Pattern = React.forwardRef<SVGSVGElement, Geometric8PatternProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 500 500"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M47.5 0H2.5V500H47.5V0Z" fill="currentColor"/>
<path d="M97.5 0H52.5V500H97.5V0Z" fill="currentColor"/>
<path d="M147.5 0H102.5V500H147.5V0Z" fill="currentColor"/>
<path d="M197.5 0H152.5V500H197.5V0Z" fill="currentColor"/>
<path d="M247.5 0H202.5V500H247.5V0Z" fill="currentColor"/>
<path d="M297.5 0H252.5V500H297.5V0Z" fill="currentColor"/>
<path d="M347.5 0H302.5V500H347.5V0Z" fill="currentColor"/>
<path d="M397.5 0H352.5V500H397.5V0Z" fill="currentColor"/>
<path d="M447.5 0H402.5V500H447.5V0Z" fill="currentColor"/>
<path d="M497.5 0H452.5V500H497.5V0Z" fill="currentColor"/>
    </svg>
  )
);

Geometric8Pattern.displayName = "Geometric8Pattern";

export const Geometric8PatternMetadata = {
  id: "geometric8_pattern",
  baseId: "geometric8",
  variant: "pattern",
  name: "Geometric8",
  category: "geometric",
  tags: [],
  viewBox: "0 0 500 500",
} as const;

export default Geometric8Pattern;
