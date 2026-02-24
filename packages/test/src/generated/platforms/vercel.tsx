/**
 * Auto-generated logo component: Vercel
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VercelLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const VercelLogo = React.forwardRef<SVGSVGElement, VercelLogoProps>(
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
      <path d="M12 2L2 20h20L12 2z" fill="black"/><path d="M12 2L2 20" stroke="white" strokeWidth="0.5" fill="none"/>
    </svg>
  )
);

VercelLogo.displayName = "VercelLogo";

export const VercelLogoMetadata = {
  id: "vercel",
  name: "Vercel",
  category: "platforms",
  tags: ["9979"],
  viewBox: "0 0 24 24",
} as const;

export default VercelLogo;
