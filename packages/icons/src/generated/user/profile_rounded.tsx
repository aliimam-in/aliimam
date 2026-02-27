/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ProfileRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ProfileRounded = React.forwardRef<SVGSVGElement, ProfileRoundedProps>(
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
      <path d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ProfileRounded.displayName = "ProfileRounded";
export const ProfileRoundedMetadata = { 
  id: "profile_rounded", 
  baseId: "profile", 
  variant: "rounded", 
  name: "Profile", 
  category: "user", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ProfileRounded;
