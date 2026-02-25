/**
 * Auto-generated logo component: Record Mail Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RecordMailOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RecordMailOffOutlineLogo = React.forwardRef<SVGSVGElement, RecordMailOffOutlineLogoProps>(
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
      <path d="M4 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M18.569 14.557a3 3 0 1 0 -4.113 -4.149" />
  <path d="M7 15h8" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

RecordMailOffOutlineLogo.displayName = "RecordMailOffOutlineLogo";

export const RecordMailOffOutlineLogoMetadata = {
  id: "record-mail-off-outline",
  baseId: "record-mail-off-outline",
  variant: "default",
  name: "Record Mail Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RecordMailOffOutlineLogo;
