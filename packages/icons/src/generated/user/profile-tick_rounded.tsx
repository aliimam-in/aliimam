/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ProfileTickRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ProfileTickRounded = React.forwardRef<SVGSVGElement, ProfileTickRoundedProps>(
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
      <path d="M14.4399 19.05L15.9599 20.57L18.9999 17.53"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.4501 10.79 7.5601 8.84 7.5601 6.44C7.5501 3.99 9.5401 2 11.9901 2C14.4401 2 16.4301 3.99 16.4301 6.44C16.4301 8.84 14.5301 10.79 12.1601 10.87Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.99 21.81C10.17 21.81 8.36004 21.35 6.98004 20.43C4.56004 18.81 4.56004 16.17 6.98004 14.56C9.73004 12.72 14.24 12.72 16.99 14.56"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ProfileTickRounded.displayName = "ProfileTickRounded";
export const ProfileTickRoundedMetadata = { 
  id: "profile-tick_rounded", 
  baseId: "profile-tick", 
  variant: "rounded", 
  name: "Profile Tick", 
  category: "user", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ProfileTickRounded;
