/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RegisteredFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RegisteredFilled = React.forwardRef<SVGSVGElement, RegisteredFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 4.66h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-1h.585l1.708 1.707a1 1 0 0 0 1.414 -1.414l-.9 -.899a3 3 0 0 0 -1.807 -5.394m0 2a1 1 0 0 1 0 2h-1v-2z" />
    </svg>
  )
);
RegisteredFilled.displayName = "RegisteredFilled";
export const RegisteredFilledMetadata = { id: "registered_filled", baseId: "registered", variant: "filled", name: "Registered", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default RegisteredFilled;
