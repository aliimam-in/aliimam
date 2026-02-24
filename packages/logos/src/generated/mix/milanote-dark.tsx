/**
 * Auto-generated logo component: Milanote Dark (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MilanoteDarkLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MilanoteDarkLogo = React.forwardRef<SVGSVGElement, MilanoteDarkLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 220 220"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#FFF" fillRule="evenodd" d="M110 20c49.706 0 90 40.294 90 90s-40.294 90-90 90-90-40.294-90-90 40.294-90 90-90Zm40 55.01c0-4.455-5.386-6.685-8.536-3.536L110 102.934l-31.464-31.46C75.386 68.324 70 70.555 70 75.01V145a5 5 0 0 0 5 5h70a5 5 0 0 0 5-5Zm-40 42.065 22.929 22.926H87.07L110 117.075Zm30-29.996v45.852l-22.929-22.926L140 87.079Zm-60 0 22.929 22.926L80 132.931V87.08Z" />
    </svg>
  )
);

MilanoteDarkLogo.displayName = "MilanoteDarkLogo";

export const MilanoteDarkLogoMetadata = {
  id: "milanote-dark",
  baseId: "milanote-dark",
  variant: "default",
  name: "Milanote Dark",
  category: "mix",
  tags: [],
  viewBox: "0 0 220 220",
} as const;

export default MilanoteDarkLogo;
