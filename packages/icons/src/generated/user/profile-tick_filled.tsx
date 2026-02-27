/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ProfileTickFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ProfileTickFilled = React.forwardRef<SVGSVGElement, ProfileTickFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill="currentColor"/>
<path d="M17.08 14.1601C14.29 12.3001 9.73996 12.3001 6.92996 14.1601C5.65996 15.0001 4.95996 16.1501 4.95996 17.3801C4.95996 18.6101 5.65996 19.7501 6.91996 20.5901C8.31996 21.5301 10.16 22.0001 12 22.0001C13.84 22.0001 15.68 21.5301 17.08 20.5901C18.34 19.7401 19.04 18.6001 19.04 17.3601C19.03 16.1401 18.34 14.9901 17.08 14.1601ZM14.33 16.5601L11.81 19.0801C11.69 19.2001 11.53 19.2601 11.37 19.2601C11.21 19.2601 11.05 19.1901 10.93 19.0801L9.66996 17.8201C9.42996 17.5801 9.42996 17.1801 9.66996 16.9401C9.90996 16.7001 10.31 16.7001 10.55 16.9401L11.37 17.7601L13.45 15.6801C13.69 15.4401 14.09 15.4401 14.33 15.6801C14.58 15.9201 14.58 16.3201 14.33 16.5601Z" fill="currentColor"/>
    </svg>
  )
);
ProfileTickFilled.displayName = "ProfileTickFilled";
export const ProfileTickFilledMetadata = { 
  id: "profile-tick_filled", 
  baseId: "profile-tick", 
  variant: "filled", 
  name: "Profile Tick", 
  category: "user", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ProfileTickFilled;
