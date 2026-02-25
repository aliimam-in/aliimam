/**
 * Auto-generated logo component: User Star (default)
 * Category: user
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UserStarLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UserStarLogo = React.forwardRef<SVGSVGElement, UserStarLogoProps>(
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
      <path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" />
  <path d="M8 15H7a4 4 0 0 0-4 4v2" />
  <circle cx="10" cy="7" r="4" />
    </svg>
  )
);

UserStarLogo.displayName = "UserStarLogo";

export const UserStarLogoMetadata = {
  id: "user-star",
  baseId: "user-star",
  variant: "default",
  name: "User Star",
  category: "user",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UserStarLogo;
