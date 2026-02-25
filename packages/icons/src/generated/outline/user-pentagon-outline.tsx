/**
 * Auto-generated logo component: User Pentagon Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UserPentagonOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UserPentagonOutlineLogo = React.forwardRef<SVGSVGElement, UserPentagonOutlineLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M13.163 2.168l8.021 5.828c.694 .504 .984 1.397 .719 2.212l-3.064 9.43a1.978 1.978 0 0 1 -1.881 1.367h-9.916a1.978 1.978 0 0 1 -1.881 -1.367l-3.064 -9.43a1.978 1.978 0 0 1 .719 -2.212l8.021 -5.828a1.978 1.978 0 0 1 2.326 0" />
  <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6" />
  <path d="M6 20.703v-.703a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.707" />
    </svg>
  )
);

UserPentagonOutlineLogo.displayName = "UserPentagonOutlineLogo";

export const UserPentagonOutlineLogoMetadata = {
  id: "user-pentagon-outline",
  baseId: "user-pentagon-outline",
  variant: "default",
  name: "User Pentagon Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UserPentagonOutlineLogo;
