import type { SVGProps } from "react";

/* Thin horizontal arrow used across CTAs and text links (→) */
export function IconArrow({ size = 16, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function IconInstagram({ size = 18, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconFacebook({ size = 18, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function IconTelegram({ size = 18, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M21.5 4.5 2.5 12l6 2.2M21.5 4.5 18 20l-9.5-5.8M21.5 4.5 8.5 14.2M8.5 14.2V20l3.2-3.4" />
    </svg>
  );
}

/* Decorative botanical sprig — a slender arching stem with alternating leaves */
export function Sprig({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 160 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M4 54C40 52 96 44 156 8" />
      {/* leaves along the stem, alternating sides */}
      <path d="M34 47c-3-8-11-11-19-9 2 8 9 12 19 9Z" fill="currentColor" fillOpacity=".12" />
      <path d="M56 39c1-8-4-15-13-17-1 8 4 15 13 17Z" fill="currentColor" fillOpacity=".12" />
      <path d="M82 30c-3-8-11-12-19-10 2 8 9 12 19 10Z" fill="currentColor" fillOpacity=".12" />
      <path d="M104 21c2-8-3-16-11-18-2 8 2 15 11 18Z" fill="currentColor" fillOpacity=".12" />
      <path d="M128 13c-2-8-11-12-19-11 3 8 10 12 19 11Z" fill="currentColor" fillOpacity=".12" />
      <path d="M150 6c3-7-1-15-8-18-3 7 0 15 8 18Z" fill="currentColor" fillOpacity=".12" />
    </svg>
  );
}

/* Small underline swash beneath the script word */
export function Swash({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 220 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M4 14c40-11 150-14 212-4-52-2-120-1-168 8 30-4 84-6 150-2" />
    </svg>
  );
}
