/**
 * Auto-generated logo component: Phone Spark Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhoneSparkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhoneSparkOutlineLogo = React.forwardRef<SVGSVGElement, PhoneSparkOutlineLogoProps>(
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
      <path d="M11.584 19.225a16 16 0 0 1 -8.584 -13.225a2 2 0 0 1 2 -2h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l.65 .26" />
  <path d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" />
    </svg>
  )
);

PhoneSparkOutlineLogo.displayName = "PhoneSparkOutlineLogo";

export const PhoneSparkOutlineLogoMetadata = {
  id: "phone-spark-outline",
  baseId: "phone-spark-outline",
  variant: "default",
  name: "Phone Spark Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhoneSparkOutlineLogo;
