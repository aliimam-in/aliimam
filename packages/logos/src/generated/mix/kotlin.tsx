/**
 * Auto-generated logo component: Kotlin (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface KotlinLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const KotlinLogo = React.forwardRef<SVGSVGElement, KotlinLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs><linearGradient x1="99.991%" y1="-.011%" x2=".01%" y2="100.01%" id="a"><stop stopColor="#E44857" offset=".344%" /><stop stopColor="#C711E1" offset="46.89%" /><stop stopColor="#7F52FF" offset="100%" /></linearGradient></defs><path fill="url(#a)" d="M256 256H0V0h256L128 127.949z" />
    </svg>
  )
);

KotlinLogo.displayName = "KotlinLogo";

export const KotlinLogoMetadata = {
  id: "kotlin",
  baseId: "kotlin",
  variant: "default",
  name: "Kotlin",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default KotlinLogo;
