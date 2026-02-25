/**
 * Auto-generated logo component: Umbrella (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UmbrellaFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UmbrellaFilledLogo = React.forwardRef<SVGSVGElement, UmbrellaFilledLogoProps>(
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
      <path d="M12 3a9 9 0 0 1 9 9a1 1 0 0 1 -.883 .993l-.117 .007h-7v5a1 1 0 0 0 1.993 .117l.007 -.117a1 1 0 0 1 2 0a3 3 0 0 1 -5.995 .176l-.005 -.176v-5h-7a1 1 0 0 1 -.993 -.883l-.007 -.117a9 9 0 0 1 9 -9z" />
    </svg>
  )
);

UmbrellaFilledLogo.displayName = "UmbrellaFilledLogo";

export const UmbrellaFilledLogoMetadata = {
  id: "umbrella_filled",
  baseId: "umbrella",
  variant: "filled",
  name: "Umbrella",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UmbrellaFilledLogo;
