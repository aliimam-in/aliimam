/**
 * Auto-generated logo component: Container Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ContainerFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ContainerFilledLogo = React.forwardRef<SVGSVGElement, ContainerFilledLogoProps>(
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
      <path d="M20 3a1 1 0 0 1 1 1v.01a1 1 0 0 1 -2 0v-.01a1 1 0 0 1 1 -1" />
  <path d="M20 19a1 1 0 0 1 1 1v.01a1 1 0 0 1 -2 0v-.01a1 1 0 0 1 1 -1" />
  <path d="M20 15a1 1 0 0 1 1 1v.01a1 1 0 0 1 -2 0v-.01a1 1 0 0 1 1 -1" />
  <path d="M20 11a1 1 0 0 1 1 1v.01a1 1 0 0 1 -2 0v-.01a1 1 0 0 1 1 -1" />
  <path d="M20 7a1 1 0 0 1 1 1v.01a1 1 0 0 1 -2 0v-.01a1 1 0 0 1 1 -1" />
  <path d="M15 3a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2z" />
  <path d="M4 3a1 1 0 0 1 1 1v.01a1 1 0 1 1 -2 0v-.01a1 1 0 0 1 1 -1" />
  <path d="M4 19a1 1 0 0 1 1 1v.01a1 1 0 0 1 -2 0v-.01a1 1 0 0 1 1 -1" />
  <path d="M4 15a1 1 0 0 1 1 1v.01a1 1 0 0 1 -2 0v-.01a1 1 0 0 1 1 -1" />
  <path d="M4 11a1 1 0 0 1 1 1v.01a1 1 0 0 1 -2 0v-.01a1 1 0 0 1 1 -1" />
  <path d="M4 7a1 1 0 0 1 1 1v.01a1 1 0 1 1 -2 0v-.01a1 1 0 0 1 1 -1" />
    </svg>
  )
);

ContainerFilledLogo.displayName = "ContainerFilledLogo";

export const ContainerFilledLogoMetadata = {
  id: "container-filled",
  baseId: "container-filled",
  variant: "default",
  name: "Container Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ContainerFilledLogo;
