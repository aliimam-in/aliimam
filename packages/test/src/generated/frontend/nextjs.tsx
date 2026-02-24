/**
 * Auto-generated logo component: Nextjs
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NextjsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const NextjsLogo = React.forwardRef<SVGSVGElement, NextjsLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11.214 3.062a1 1 0 00-.868 0A19.857 19.857 0 002.347 8.62a1 1 0 00-.348 1.348l8.77 13.54a1 1 0 00.862.492 1 1 0 00.862-.492l8.77-13.54a1 1 0 00-.348-1.348A19.857 19.857 0 0011.214 3.062zm6.908 15.23l-5.85-9.057v5.537a1 1 0 11-2 0V9.235l-5.85 9.057h13.7z"/>
    </svg>
  )
);

NextjsLogo.displayName = "NextjsLogo";

export const NextjsLogoMetadata = {
  id: "nextjs",
  name: "Nextjs",
  category: "frontend",
  tags: ["ali","ai"],
  viewBox: "0 0 24 24",
} as const;

export default NextjsLogo;
