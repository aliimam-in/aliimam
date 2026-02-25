/**
 * Auto-generated logo component: Kibo UI (default)
 * Category: library
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface KiboUIProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const KiboUI = React.forwardRef<SVGSVGElement, KiboUIProps>(
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
      <g clipPath="url(#clip0_2066_932)">
<path fillRule="evenodd" clipRule="evenodd" d="M6.1206 0H23.9668V6V18L18.018 24V6H0.171875L6.1206 0ZM0.171875 19.808V12H7.91317L0.171875 19.808ZM12.0693 24H4.4285L12.0693 16.2934V24Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2066_932">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  )
);

KiboUI.displayName = "KiboUI";

export const KiboUIMetadata = {
  id: "Kibo-UI",
  baseId: "Kibo-UI",
  variant: "default",
  name: "Kibo UI",
  category: "library",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default KiboUI;
