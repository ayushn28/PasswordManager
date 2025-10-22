import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-200 flex flex-col justify-center items-center w-full py-4 border-t border-slate-700 shadow-inner">
      {/* Logo */}
      <div className="logo font-bold text-xl tracking-tight mb-1">
        <span className="text-green-500">&lt;</span>
        <span className="text-white">Pass</span>
        <span className="text-green-500">OP/&gt;</span>
      </div>

      {/* Tagline */}
      <p className="text-gray-400 text-xs mb-1">
        Secure your passwords, simplify your life.
      </p>

      {/* Divider line */}
      <div className="w-14 h-[2px] bg-green-500 rounded-full my-1"></div>

      {/* Copyright */}
      <p className="text-[10px] text-gray-500">
        © {new Date().getFullYear()} PassOP. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
