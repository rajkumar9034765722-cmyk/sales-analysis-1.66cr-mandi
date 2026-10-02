"use client";
import { useState } from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f8f9f3] p-4 md:p-8 font-sans">
      {/* HEADER WITH LOGO */}
      <header className="max-w-7xl mx-auto bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm mb-6">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="DataMind AI" className="h-12 w-auto" />
          <div>
            <h1 className="font-bold text-lg leading-none text-[#0f3923]">DataMind AI</h1>
            <p className="text-xs text-[#b89b4e] tracking-[0.2em]">Mandi Intelligence</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Prepared for</p>
          <p className="font-semibold text-sm">BBCR Mandi Dabwali</p>
          <p className="text-xs text-green-600">FY 2023-24 • LIVE</p>
        </div>
      </header>

      {/* YOUR EXISTING DASHBOARD CODE STARTS HERE - Keep your charts below */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Rs. 1.66Cr Turnover • 52 Dealers</h2>
          <p className="text-gray-500 mt-2">Dashboard is LIVE with new branding. Add your previous charts code below this line.</p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto text-center mt-8 text-xs text-gray-400">
        Powered by <span className="font-bold text-[#0f3923]">DataMind AI</span> • Northstar ERP Verified • Panipat, Haryana
      </footer>
    </div>
  );
}
