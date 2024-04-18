import React from 'react';

export default function Figma(props) {
  return (
    <svg width={256} height={384} viewBox="0 0 256 384" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M64 384C99.328 384 128 355.328 128 320V256H64C28.672 256 0 284.672 0 320C0 355.328 28.672 384 64 384Z" fill="#0ACF83" />
      <path d="M0 192C0 156.672 28.672 128 64 128H128V256H64C28.672 256 0 227.328 0 192Z" fill="#A259FF" />
      <path d="M0 64C0 28.672 28.672 0 64 0H128V128H64C28.672 128 0 99.328 0 64Z" fill="#F24E1E" />
      <path d="M128 0H192C227.328 0 256 28.672 256 64C256 99.328 227.328 128 192 128H128V0Z" fill="#FF7262" />
      <path d="M256 192C256 227.328 227.328 256 192 256C156.672 256 128 227.328 128 192C128 156.672 156.672 128 192 128C227.328 128 256 156.672 256 192Z" fill="#1ABCFE" />
    </svg>
  );
}
