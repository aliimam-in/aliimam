/**
 * Auto-generated logo component: Medical Cross (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MedicalCrossFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MedicalCrossFilledLogo = React.forwardRef<SVGSVGElement, MedicalCrossFilledLogoProps>(
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
      <path d="M11 2l-.15 .005a2 2 0 0 0 -1.85 1.995v2.803l-2.428 -1.401a2 2 0 0 0 -2.732 .732l-1 1.732l-.073 .138a2 2 0 0 0 .805 2.594l2.427 1.402l-2.427 1.402a2 2 0 0 0 -.732 2.732l1 1.732l.083 .132a2 2 0 0 0 2.649 .6l2.428 -1.402v2.804a2 2 0 0 0 2 2h2l.15 -.005a2 2 0 0 0 1.85 -1.995v-2.804l2.428 1.403a2 2 0 0 0 2.732 -.732l1 -1.732l.073 -.138a2 2 0 0 0 -.805 -2.594l-2.428 -1.403l2.428 -1.402a2 2 0 0 0 .732 -2.732l-1 -1.732l-.083 -.132a2 2 0 0 0 -2.649 -.6l-2.428 1.4v-2.802a2 2 0 0 0 -2 -2h-2z" />
    </svg>
  )
);

MedicalCrossFilledLogo.displayName = "MedicalCrossFilledLogo";

export const MedicalCrossFilledLogoMetadata = {
  id: "medical-cross_filled",
  baseId: "medical-cross",
  variant: "filled",
  name: "Medical Cross",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MedicalCrossFilledLogo;
