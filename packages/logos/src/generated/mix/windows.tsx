/**
 * Auto-generated logo component: Windows (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WindowsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const WindowsLogo = React.forwardRef<SVGSVGElement, WindowsLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 88 88"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m0 12.402 35.687-4.86.016 34.423-35.67.203zm35.67 33.529.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349-.011 41.34-47.318-6.678-.066-34.739z" fill="#00adef" />
    </svg>
  )
);

WindowsLogo.displayName = "WindowsLogo";

export const WindowsLogoMetadata = {
  id: "windows",
  baseId: "windows",
  variant: "default",
  name: "Windows",
  category: "mix",
  tags: [],
  viewBox: "0 0 88 88",
} as const;

export default WindowsLogo;
