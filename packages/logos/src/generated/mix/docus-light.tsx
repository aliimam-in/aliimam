/**
 * Auto-generated logo component: Docus Light (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DocusLightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DocusLightLogo = React.forwardRef<SVGSVGElement, DocusLightLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 33 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M16.0752 0C7.21095 0 0 7.18587 0 16.0501V30.3853C0 31.2771 0.722918 32 1.61468 32H16.1002C24.9367 32 32.1002 24.8366 32.1002 16C32.1002 7.16344 24.9117 0 16.0752 0ZM24.802 19.402C26.697 19.402 28.2332 17.8658 28.2332 15.9708C28.2332 14.0758 26.697 12.5396 24.802 12.5396C22.907 12.5396 21.3708 14.0758 21.3708 15.9708C21.3708 17.8658 22.907 19.402 24.802 19.402ZM14.6182 19.4022C16.5133 19.4022 18.0494 17.866 18.0494 15.971C18.0494 14.076 16.5133 12.5398 14.6182 12.5398C12.7233 12.5398 11.1871 14.076 11.1871 15.971C11.1871 17.866 12.7233 19.4022 14.6182 19.4022Z" fill="black" />
    </svg>
  )
);

DocusLightLogo.displayName = "DocusLightLogo";

export const DocusLightLogoMetadata = {
  id: "docus-light",
  baseId: "docus-light",
  variant: "default",
  name: "Docus Light",
  category: "mix",
  tags: [],
  viewBox: "0 0 33 32",
} as const;

export default DocusLightLogo;
