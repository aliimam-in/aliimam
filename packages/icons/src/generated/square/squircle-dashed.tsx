/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquircleDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquircleDashed = React.forwardRef<SVGSVGElement, SquircleDashedProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M13.77 3.043a34 34 0 0 0-3.54 0" />
  <path d="M13.771 20.956a33 33 0 0 1-3.541.001" />
  <path d="M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44" />
  <path d="M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438" />
  <path d="M20.957 10.23a33 33 0 0 1 0 3.54" />
  <path d="M3.043 10.23a34 34 0 0 0 .001 3.541" />
  <path d="M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438" />
  <path d="M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44" />
    </svg>
  )
);
SquircleDashed.displayName = "SquircleDashed";
export const SquircleDashedMetadata = { id: "squircle-dashed", baseId: "squircle-dashed", variant: "default", name: "Squircle Dashed", category: "square", tags: [], viewBox: "0 0 24 24" } as const;
export default SquircleDashed;
