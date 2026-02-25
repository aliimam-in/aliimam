/**
 * Auto-generated logo component: Chalkboard Teacher Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChalkboardTeacherOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChalkboardTeacherOutlineLogo = React.forwardRef<SVGSVGElement, ChalkboardTeacherOutlineLogoProps>(
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
      <path d="M8 19h-3a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a1 1 0 0 1 -1 1" />
  <path d="M12 14a2 2 0 1 0 4.001 -.001a2 2 0 0 0 -4.001 .001" />
  <path d="M17 19a2 2 0 0 0 -2 -2h-2a2 2 0 0 0 -2 2" />
    </svg>
  )
);

ChalkboardTeacherOutlineLogo.displayName = "ChalkboardTeacherOutlineLogo";

export const ChalkboardTeacherOutlineLogoMetadata = {
  id: "chalkboard-teacher-outline",
  baseId: "chalkboard-teacher-outline",
  variant: "default",
  name: "Chalkboard Teacher Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChalkboardTeacherOutlineLogo;
