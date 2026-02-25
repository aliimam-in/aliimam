/**
 * Auto-generated logo component: Superscript (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SuperscriptLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SuperscriptLogo = React.forwardRef<SVGSVGElement, SuperscriptLogoProps>(
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
      <path d="m4 19 8-8" />
  <path d="m12 19-8-8" />
  <path d="M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06" />
    </svg>
  )
);

SuperscriptLogo.displayName = "SuperscriptLogo";

export const SuperscriptLogoMetadata = {
  id: "superscript",
  baseId: "superscript",
  variant: "default",
  name: "Superscript",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SuperscriptLogo;
