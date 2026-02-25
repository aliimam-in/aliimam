/**
 * Auto-generated logo component: Gitlab (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitlabLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GitlabLogo = React.forwardRef<SVGSVGElement, GitlabLogoProps>(
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
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  )
);

GitlabLogo.displayName = "GitlabLogo";

export const GitlabLogoMetadata = {
  id: "gitlab",
  baseId: "gitlab",
  variant: "default",
  name: "Gitlab",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GitlabLogo;
