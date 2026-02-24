/**
 * Auto-generated logo component: Receipt Japanese Yen (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ReceiptJapaneseYenLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ReceiptJapaneseYenLogo = React.forwardRef<SVGSVGElement, ReceiptJapaneseYenLogoProps>(
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
      <path d="m12 10 3-3" />
  <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
  <path d="M9 11h6" />
  <path d="M9 15h6" />
  <path d="m9 7 3 3v7" />
    </svg>
  )
);

ReceiptJapaneseYenLogo.displayName = "ReceiptJapaneseYenLogo";

export const ReceiptJapaneseYenLogoMetadata = {
  id: "receipt-japanese-yen",
  baseId: "receipt-japanese-yen",
  variant: "default",
  name: "Receipt Japanese Yen",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ReceiptJapaneseYenLogo;
