/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LightbulbOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LightbulbOff = React.forwardRef<SVGSVGElement, LightbulbOffProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5" />
  <path d="m2 2 20 20" />
  <path d="M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5" />
  <path d="M9 18h6" />
  <path d="M10 22h4" />
    </svg>
  )
);
LightbulbOff.displayName = "LightbulbOff";
export const LightbulbOffMetadata = { id: "lightbulb-off", baseId: "lightbulb-off", variant: "default", name: "Lightbulb Off", category: "home", tags: [], viewBox: "0 0 24 24" } as const;
export default LightbulbOff;
