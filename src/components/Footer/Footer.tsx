import React from 'react';
import { FooterBase, Link } from './Footer.styles';

export const Footer = () => {
  return (
    <FooterBase>
      <div>
        <Link
          href="https://github.com/NataliaK96"
          target="_blank"
          rel="noreferrer"
        >
          © Natalia Komarova
        </Link>
      </div>
    </FooterBase>
  );
};
