/**
 * Auto-generated logo component: Mouse Pointer (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MousePointerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MousePointerLogo = React.forwardRef<SVGSVGElement, MousePointerLogoProps>(
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
      <path d="M12.586 12.586 19 19" />
  <path d="M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z" />
    </svg>
  )
);

MousePointerLogo.displayName = "MousePointerLogo";

export const MousePointerLogoMetadata = {
  id: "mouse-pointer",
  baseId: "mouse-pointer",
  variant: "default",
  name: "Mouse Pointer",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MousePointerLogo;
