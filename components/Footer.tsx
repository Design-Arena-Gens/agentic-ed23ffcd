import Link from "next/link";

export function Footer() {
  return (
    <footer className="container-responsive pb-10">
      <div className="glass rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <div className="font-bold">Rojgar AI</div>
            <div className="text-slate-500 text-sm">
              Smart government job discovery & eligibility matching
            </div>
          </div>
          <div className="text-sm text-slate-600">
            <div>
              <span className="font-semibold">CEO & Founder:</span> Ravi Kr. Singh
            </div>
            <div>
              <span className="font-semibold">Mobile:</span> +91-7255947629
            </div>
            <div>
              <span className="font-semibold">Email:</span> theutkrishti@gmail.com
            </div>
          </div>
        </div>
        <div className="mt-4 text-xs text-slate-500">
          ? {new Date().getFullYear()} Rojgar AI. All rights reserved.
          &nbsp;?&nbsp;
          <Link className="hover:text-brand-700" href="/about">About</Link>
        </div>
      </div>
    </footer>
  );
}
