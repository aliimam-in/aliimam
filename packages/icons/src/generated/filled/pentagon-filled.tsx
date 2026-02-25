/**
 * Auto-generated logo component: Pentagon Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PentagonFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PentagonFilledLogo = React.forwardRef<SVGSVGElement, PentagonFilledLogoProps>(
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
      <path d="M10.205 2.6l-6.96 5.238a3 3 0 0 0 -1.045 3.338l2.896 8.765a3 3 0 0 0 2.85 2.059h8.12a3 3 0 0 0 2.841 -2.037l2.973 -8.764a3 3 0 0 0 -1.05 -3.37l-7.033 -5.237l-.091 -.061l-.018 -.01l-.106 -.07a3 3 0 0 0 -3.377 .148z" />
    </svg>
  )
);

PentagonFilledLogo.displayName = "PentagonFilledLogo";

export const PentagonFilledLogoMetadata = {
  id: "pentagon-filled",
  baseId: "pentagon-filled",
  variant: "default",
  name: "Pentagon Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PentagonFilledLogo;
