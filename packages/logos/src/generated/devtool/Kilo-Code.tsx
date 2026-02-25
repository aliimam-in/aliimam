/**
 * Auto-generated logo component: Kilo Code (default)
 * Category: devtool
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface KiloCodeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const KiloCode = React.forwardRef<SVGSVGElement, KiloCodeProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <g clipPath="url(#clip0_2066_387)">
<path d="M17.25 19.5V18H19.5V14.25L18 12.75H15V14.25H12.75V18L14.25 19.5H17.25ZM15 15H17.25V17.25H15V15Z" fill="currentColor"/>
<path d="M11.25 12.75H9V15H11.25V12.75Z" fill="currentColor"/>
<path d="M19.5 9H17.25V6.75L15 4.5H12.75V6.75H15V9H12.75V11.25H19.5V9Z" fill="currentColor"/>
<path d="M0 0V24H24V0H0ZM21.75 21.75H2.25V2.25H21.75V21.75Z" fill="currentColor"/>
<path d="M11.25 19.5V17.25H6.75V12.75H4.5V17.3906L6.60938 19.5H11.25Z" fill="currentColor"/>
<path d="M11.25 4.5H9V6.75H11.25V4.5Z" fill="currentColor"/>
<path d="M6.75 9H9V11.25H11.25V9L9 6.75H6.75V4.5H4.5V11.25H6.75V9Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2066_387">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

KiloCode.displayName = "KiloCode";

export const KiloCodeMetadata = {
  id: "Kilo-Code",
  baseId: "Kilo-Code",
  variant: "default",
  name: "Kilo Code",
  category: "devtool",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default KiloCode;
