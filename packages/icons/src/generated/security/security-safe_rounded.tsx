/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SecuritySafeRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SecuritySafeRounded = React.forwardRef<SVGSVGElement, SecuritySafeRoundedProps>(
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
      <path d="M20.91 11.12C20.91 16.01 17.36 20.59 12.51 21.93C12.18 22.02 11.82 22.02 11.49 21.93C6.63996 20.59 3.08997 16.01 3.08997 11.12V6.73003C3.08997 5.91003 3.70998 4.98004 4.47998 4.67004L10.05 2.39007C11.3 1.88007 12.71 1.88007 13.96 2.39007L19.53 4.67004C20.29 4.98004 20.92 5.91003 20.92 6.73003L20.91 11.12Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39543 13.1046 8.5 12 8.5C10.8954 8.5 10 9.39543 10 10.5C10 11.6046 10.8954 12.5 12 12.5Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12.5V15.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SecuritySafeRounded.displayName = "SecuritySafeRounded";
export const SecuritySafeRoundedMetadata = { 
  id: "security-safe_rounded", 
  baseId: "security-safe", 
  variant: "rounded", 
  name: "Security Safe", 
  category: "security", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SecuritySafeRounded;
