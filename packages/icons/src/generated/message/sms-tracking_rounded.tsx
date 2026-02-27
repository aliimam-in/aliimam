/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SmsTrackingRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SmsTrackingRounded = React.forwardRef<SVGSVGElement, SmsTrackingRoundedProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M2 8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5H7"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 16.5H8"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 12.5H5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SmsTrackingRounded.displayName = "SmsTrackingRounded";
export const SmsTrackingRoundedMetadata = { 
  id: "sms-tracking_rounded", 
  baseId: "sms-tracking", 
  variant: "rounded", 
  name: "Sms Tracking", 
  category: "message", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SmsTrackingRounded;
