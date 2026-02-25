/**
 * Auto-generated logo component: Webflow (default)
 * Category: cms
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WebflowProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Webflow = React.forwardRef<SVGSVGElement, WebflowProps>(
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
      <g clipPath="url(#clip0_2062_2280)">
<path fillRule="evenodd" clipRule="evenodd" d="M24 4L16.3419 18.993H9.14879L12.3537 12.7793H12.2099C9.56588 16.2166 5.62094 18.4795 0 18.993V12.8652C0 12.8652 3.59586 12.6525 5.70974 10.4268H0V4.00012H6.41714V9.28594L6.56117 9.28536L9.18343 4.00012H14.0365V9.25243L14.1806 9.2522L16.9012 4H24Z" fill="#146EF5"/>
</g>
<defs>
<clipPath id="clip0_2062_2280">
<rect width="24" height="15" fill="white" transform="translate(0 4)"/>
</clipPath>
</defs>
    </svg>
  )
);

Webflow.displayName = "Webflow";

export const WebflowMetadata = {
  id: "Webflow",
  baseId: "Webflow",
  variant: "default",
  name: "Webflow",
  category: "cms",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Webflow;
