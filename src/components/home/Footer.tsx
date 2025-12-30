export default function Footer() {
    return (
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <div className="h-8 w-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                N
              </div>
              Neode
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Discover stories that matter. Create content that inspires. Join a
              community of curious minds.
            </p>
          </div>
  
          <div>
            <div className="font-semibold">Platform</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Statistics</li>
              <li>Creators</li>
              <li>Subscription</li>
              <li>Paywall Info</li>
            </ul>
          </div>
  
          <div>
            <div className="font-semibold">Support</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Help Center</li>
              <li>Terms and conditions</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>
  
          <div>
            <div className="font-semibold">Subscribe</div>
            <p className="mt-3 text-sm text-slate-600">
              Get the latest trends directly in your inbox.
            </p>
            <div className="mt-3 flex gap-2">
              <input
                className="flex-1 rounded-lg border px-3 py-2 text-sm outline-none"
                placeholder="Email address"
              />
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white">
                Go
              </button>
            </div>
  
            <div className="mt-6 text-xs text-slate-500 flex items-center justify-between">
              <span>© 2023 Neode Inc. All rights reserved.</span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Systems Operational
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  