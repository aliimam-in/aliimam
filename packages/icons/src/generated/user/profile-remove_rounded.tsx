/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ProfileRemoveRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ProfileRemoveRounded = React.forwardRef<SVGSVGElement, ProfileRemoveRoundedProps>(
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
      <path d="M19.5 19H15.5"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.15 10.87C12.05 10.86 11.93 10.86 11.82 10.87C9.44005 10.79 7.55005 8.84 7.55005 6.44C7.55005 3.99 9.53005 2 11.99 2C14.44 2 16.43 3.99 16.43 6.44C16.42 8.84 14.53 10.79 12.15 10.87Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.99 21.81C10.17 21.81 8.36004 21.35 6.98004 20.43C4.56004 18.81 4.56004 16.17 6.98004 14.56C9.73004 12.72 14.24 12.72 16.99 14.56"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ProfileRemoveRounded.displayName = "ProfileRemoveRounded";
export const ProfileRemoveRoundedMetadata = { 
  id: "profile-remove_rounded", 
  baseId: "profile-remove", 
  variant: "rounded", 
  name: "Profile Remove", 
  category: "user", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ProfileRemoveRounded;
