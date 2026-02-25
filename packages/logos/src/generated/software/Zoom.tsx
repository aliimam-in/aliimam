/**
 * Auto-generated logo component: Zoom (default)
 * Category: software
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZoomProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Zoom = React.forwardRef<SVGSVGElement, ZoomProps>(
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
      <g clipPath="url(#clip0_2039_533)">
<path d="M24 12C24 13.272 23.904 14.544 23.688 15.768C23.04 19.824 19.824 23.04 15.768 23.688C14.544 23.904 13.272 24 12 24C10.728 24 9.456 23.904 8.232 23.688C4.176 23.04 0.96 19.824 0.312 15.768C0.096 14.544 0 13.272 0 12C0 10.728 0.096 9.456 0.312 8.232C0.96 4.176 4.176 0.96 8.232 0.312C9.456 0.096 10.728 0 12 0C13.272 0 14.544 0.096 15.768 0.312C19.824 0.96 23.04 4.176 23.688 8.232C23.904 9.456 24 10.728 24 12Z" fill="url(#paint0_linear_2039_533)"/>
<path d="M19.1279 19.488H7.03195C6.23995 19.488 5.47195 19.056 5.11195 18.36C4.67995 17.544 4.84795 16.56 5.49595 15.912L13.9199 7.48804H7.87195C6.21595 7.48804 4.87195 6.14404 4.87195 4.48804H16.0079C16.7999 4.48804 17.5679 4.92004 17.9279 5.61604C18.3599 6.43204 18.1919 7.41604 17.5439 8.06404L9.14395 16.512H16.1279C17.7839 16.512 19.1279 17.832 19.1279 19.488Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_2039_533" x1="567.984" y1="2294.68" x2="1832.02" y2="105.317" gradientUnits="userSpaceOnUse">
<stop offset="6e-07" stopColor="#0845BF"/>
<stop offset="0.1911" stopColor="#0950DE"/>
<stop offset="0.3823" stopColor="#0B59F6"/>
<stop offset="0.5" stopColor="#0B5CFF"/>
<stop offset="0.6732" stopColor="#0E5EFE"/>
<stop offset="0.7774" stopColor="#1665FC"/>
<stop offset="0.8633" stopColor="#246FF9"/>
<stop offset="0.9388" stopColor="#387FF4"/>
<stop offset="1" stopColor="#4F90EE"/>
</linearGradient>
<clipPath id="clip0_2039_533">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  )
);

Zoom.displayName = "Zoom";

export const ZoomMetadata = {
  id: "Zoom",
  baseId: "Zoom",
  variant: "default",
  name: "Zoom",
  category: "software",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Zoom;
