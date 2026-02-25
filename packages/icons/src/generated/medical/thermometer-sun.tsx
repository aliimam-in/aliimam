/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ThermometerSunProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ThermometerSun = React.forwardRef<SVGSVGElement, ThermometerSunProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 2v2" />
  <path d="M12 8a4 4 0 0 0-1.645 7.647" />
  <path d="M2 12h2" />
  <path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" />
  <path d="m4.93 4.93 1.41 1.41" />
  <path d="m6.34 17.66-1.41 1.41" />
    </svg>
  )
);
ThermometerSun.displayName = "ThermometerSun";
export const ThermometerSunMetadata = { id: "thermometer-sun", baseId: "thermometer-sun", variant: "default", name: "Thermometer Sun", category: "medical", tags: [], viewBox: "0 0 24 24" } as const;
export default ThermometerSun;
