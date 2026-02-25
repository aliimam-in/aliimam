/**
 * Auto-generated logo component: Align Box Left Top Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignBoxLeftTopFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignBoxLeftTopFilledLogo = React.forwardRef<SVGSVGElement, AlignBoxLeftTopFilledLogoProps>(
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
      <path d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-10.333 9h-2l-.117 .007a1 1 0 0 0 .117 1.993h2l.117 -.007a1 1 0 0 0 -.117 -1.993zm4 -3h-6l-.117 .007a1 1 0 0 0 .117 1.993h6l.117 -.007a1 1 0 0 0 -.117 -1.993zm-2 -3h-4l-.117 .007a1 1 0 0 0 .117 1.993h4l.117 -.007a1 1 0 0 0 -.117 -1.993z" />
    </svg>
  )
);

AlignBoxLeftTopFilledLogo.displayName = "AlignBoxLeftTopFilledLogo";

export const AlignBoxLeftTopFilledLogoMetadata = {
  id: "align-box-left-top-filled",
  baseId: "align-box-left-top-filled",
  variant: "default",
  name: "Align Box Left Top Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignBoxLeftTopFilledLogo;
