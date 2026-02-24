/**
 * Auto-generated logo component: Npm Wordmark (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NpmWordmarkLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const NpmWordmarkLogo = React.forwardRef<SVGSVGElement, NpmWordmarkLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 128 128"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#cb3837" d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2Zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89Zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79Zm13.78 7.29H64v14.56h-6.89Zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79Z" />
    </svg>
  )
);

NpmWordmarkLogo.displayName = "NpmWordmarkLogo";

export const NpmWordmarkLogoMetadata = {
  id: "npm-wordmark",
  baseId: "npm-wordmark",
  variant: "default",
  name: "Npm Wordmark",
  category: "mix",
  tags: [],
  viewBox: "0 0 128 128",
} as const;

export default NpmWordmarkLogo;
