/**
 * Auto-generated logo component: Clock Hour 10 (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockHour10FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockHour10FilledLogo = React.forwardRef<SVGSVGElement, ClockHour10FilledLogoProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5.401 9.576l.052 .021l.08 .026l.08 .019l.072 .011l.117 .007l.076 -.003l.135 -.02l.082 -.02l.103 -.039l.073 -.035l.078 -.046l.06 -.042l.08 -.069l.083 -.088l.062 -.083l.053 -.09l.031 -.064l.032 -.081l.03 -.109l.015 -.094l.007 -.117v-5a1 1 0 0 0 -2 0v3.131l-1.445 -.963a1 1 0 0 0 -1.317 .184l-.07 .093a1 1 0 0 0 .277 1.387l3.038 2.024z" />
    </svg>
  )
);

ClockHour10FilledLogo.displayName = "ClockHour10FilledLogo";

export const ClockHour10FilledLogoMetadata = {
  id: "clock-hour-10_filled",
  baseId: "clock-hour-10",
  variant: "filled",
  name: "Clock Hour 10",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockHour10FilledLogo;
