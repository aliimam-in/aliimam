/**
 * Auto-generated logo component: Git (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const GitLogo = React.forwardRef<SVGSVGElement, GitLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36" />
    </svg>
  )
);

GitLogo.displayName = "GitLogo";

export const GitLogoMetadata = {
  id: "git",
  baseId: "git",
  variant: "default",
  name: "Git",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default GitLogo;
