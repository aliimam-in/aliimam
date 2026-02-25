/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PhoneOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PhoneOff = React.forwardRef<SVGSVGElement, PhoneOffProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272" />
  <path d="M22 2 2 22" />
  <path d="M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473" />
    </svg>
  )
);
PhoneOff.displayName = "PhoneOff";
export const PhoneOffMetadata = { id: "phone-off", baseId: "phone-off", variant: "default", name: "Phone Off", category: "communiccation", tags: [], viewBox: "0 0 24 24" } as const;
export default PhoneOff;
