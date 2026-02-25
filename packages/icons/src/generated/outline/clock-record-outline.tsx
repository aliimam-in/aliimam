/**
 * Auto-generated logo component: Clock Record Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockRecordOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockRecordOutlineLogo = React.forwardRef<SVGSVGElement, ClockRecordOutlineLogoProps>(
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
      <path d="M21 12.3a9 9 0 1 0 -8.683 8.694" />
  <path d="M12 7v5l2 2" />
  <path d="M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    </svg>
  )
);

ClockRecordOutlineLogo.displayName = "ClockRecordOutlineLogo";

export const ClockRecordOutlineLogoMetadata = {
  id: "clock-record-outline",
  baseId: "clock-record-outline",
  variant: "default",
  name: "Clock Record Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockRecordOutlineLogo;
