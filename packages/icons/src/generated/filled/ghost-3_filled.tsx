/**
 * Auto-generated logo component: Ghost 3 (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Ghost3FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Ghost3FilledLogo = React.forwardRef<SVGSVGElement, Ghost3FilledLogoProps>(
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
      <path d="M12 3a8 8 0 0 1 8 8v6.954l.009 .103a2.78 2.78 0 0 1 -1.468 2.618l-.163 .08c-1.111 .502 -2.42 .22 -3.266 -.74a.65 .65 0 0 0 -1.024 0a2.65 2.65 0 0 1 -4.176 0a.65 .65 0 0 0 -.512 -.249c-.2 0 -.389 .092 -.55 .296a2.78 2.78 0 0 1 -4.859 -2.005l.01 -.104l.007 -.077l-.008 .074v-6.95l.004 -.25a8 8 0 0 1 7.747 -7.746zm-1.99 6h-.01a1 1 0 1 0 0 2h.01a1 1 0 0 0 0 -2m4 0h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2" />
    </svg>
  )
);

Ghost3FilledLogo.displayName = "Ghost3FilledLogo";

export const Ghost3FilledLogoMetadata = {
  id: "ghost-3_filled",
  baseId: "ghost-3",
  variant: "filled",
  name: "Ghost 3",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Ghost3FilledLogo;
