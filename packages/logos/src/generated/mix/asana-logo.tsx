/**
 * Auto-generated logo component: Asana Logo (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AsanaLogoLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const AsanaLogoLogo = React.forwardRef<SVGSVGElement, AsanaLogoLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 251 232"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#F06A6A" d="M179.383 54.3733c0 30.0166-24.337 54.3737-54.354 54.3737-30.0355 0-54.3733-24.3382-54.3733-54.3737S94.9935 0 125.029 0c30.017 0 54.354 24.3378 54.354 54.3733ZM54.3928 122.33c-30.0166 0-54.373269 24.338-54.373269 54.355 0 30.017 24.337769 54.373 54.373269 54.373 30.0354 0 54.3732-24.338 54.3732-54.373 0-30.017-24.3378-54.355-54.3732-54.355Zm141.2532 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z" />
    </svg>
  )
);

AsanaLogoLogo.displayName = "AsanaLogoLogo";

export const AsanaLogoLogoMetadata = {
  id: "asana-logo",
  baseId: "asana-logo",
  variant: "default",
  name: "Asana Logo",
  category: "mix",
  tags: [],
  viewBox: "0 0 251 232",
} as const;

export default AsanaLogoLogo;
