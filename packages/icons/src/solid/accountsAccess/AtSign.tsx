import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface AtSignProps extends IconProps {
  type?: "solid" | "stroke";
}

export const AtSign: IconComponent<AtSignProps> = React.forwardRef<
  SVGSVGElement,
  AtSignProps
>(function AtSign(
  {
    color = "currentColor",
    fill,
    size = 24,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    strokeDasharray,
    opacity,
    className,
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "solid") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <g clipPath="url(#undefined-clip0_70_4342)">
          <path
            d="M7.12595 1.58411C9.47235 0.486162 12.1213 0.212554 14.6425 0.807739C17.1637 1.403 19.41 2.83215 21.0175 4.8634C22.6252 6.89478 23.5 9.40956 23.5 12.0001V13.0001C23.4999 14.1936 23.0255 15.3379 22.1816 16.1818C21.3377 17.0256 20.1934 17.5001 19 17.5001C17.8065 17.5001 16.6622 17.0256 15.8183 16.1818C15.7799 16.1433 15.743 16.1033 15.706 16.0636C14.7284 16.9557 13.4278 17.5001 12 17.5001C8.96248 17.5001 6.50004 15.0376 6.49997 12.0001C6.49997 8.96258 8.96243 6.50016 12 6.50012C12.9895 6.50013 13.9175 6.76245 14.7197 7.21985C14.9831 6.78849 15.4575 6.50014 16 6.50012C16.8284 6.50015 17.5 7.17172 17.5 8.00012V13.0001C17.5 13.3979 17.6582 13.7794 17.9394 14.0607C18.2207 14.3419 18.6022 14.5001 19 14.5001C19.3977 14.5001 19.7792 14.3419 20.0605 14.0607C20.3418 13.7794 20.4999 13.3979 20.5 13.0001V12.0001C20.5 10.0854 19.8533 8.22618 18.665 6.72473C17.4768 5.22353 15.8164 4.1676 13.9531 3.72766C12.0896 3.28775 10.1317 3.48942 8.39743 4.3009C6.66328 5.11238 5.25376 6.48593 4.39743 8.19836C3.54115 9.91098 3.2883 11.8631 3.67966 13.7374C4.07104 15.6117 5.08364 17.2996 6.55368 18.5265C8.0237 19.7532 9.86528 20.4474 11.7793 20.4972C13.6933 20.5469 15.5678 19.9487 17.0996 18.7999C17.7623 18.3029 18.7031 18.4371 19.2002 19.0997C19.6971 19.7624 19.5629 20.7033 18.9004 21.2003C16.8279 22.7546 14.2908 23.5635 11.7011 23.4962C9.11157 23.4289 6.62067 22.489 4.63181 20.8292C2.64295 19.1694 1.27267 16.8865 0.743134 14.3507C0.213683 11.815 0.555481 9.17453 1.71384 6.85754C2.87237 4.54049 4.77959 2.68207 7.12595 1.58411ZM12 9.50012C10.6193 9.50016 9.49997 10.6194 9.49997 12.0001C9.50004 13.3808 10.6193 14.5001 12 14.5001C13.3806 14.5001 14.4999 13.3808 14.5 12.0001C14.5 10.6194 13.3807 9.50015 12 9.50012Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_70_4342">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  if (type === "stroke") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 8.00001V13C16 13.7957 16.3161 14.5587 16.8787 15.1213C17.4413 15.6839 18.2044 16 19 16C19.7957 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7957 22 13V12C22 9.74731 21.2394 7.56061 19.8414 5.79418C18.4434 4.02775 16.49 2.78508 14.2975 2.26752C12.1051 1.74996 9.80215 1.98782 7.76178 2.94256C5.72141 3.89731 4.06318 5.513 3.05574 7.52787C2.0483 9.54274 1.75069 11.8387 2.21111 14.0439C2.67154 16.249 3.86303 18.2341 5.59254 19.6775C7.32205 21.1209 9.48825 21.9381 11.7402 21.9966C13.9921 22.0552 16.1979 21.3516 18 20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 8.00001V13C16 13.7957 16.3161 14.5587 16.8787 15.1213C17.4413 15.6839 18.2044 16 19 16C19.7957 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7957 22 13V12C22 9.74731 21.2394 7.56061 19.8414 5.79418C18.4434 4.02775 16.49 2.78508 14.2975 2.26752C12.1051 1.74996 9.80215 1.98782 7.76178 2.94256C5.72141 3.89731 4.06318 5.513 3.05574 7.52787C2.0483 9.54274 1.75069 11.8387 2.21111 14.0439C2.67154 16.249 3.86303 18.2341 5.59254 19.6775C7.32205 21.1209 9.48825 21.9381 11.7402 21.9966C13.9921 22.0552 16.1979 21.3516 18 20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`AtSign doesn't support ${type}`);
  return null;
});

AtSign.displayName = "AtSign";

AtSign.metadata = {
  name: "AtSign",
  category: "solid/accountsAccess",
  tags: ["at", "sign", "icon"],
  description: "AtSign icon from solid/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AtSign;
