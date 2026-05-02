

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <a href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Teralis Batam — Spesialis Besi & Stainless Steel No.1" },
      { name: "description", content: "Bengkel teralis Batam — fabrikasi teralis jendela, kanopi, railing tangga, rolling door, baja ringan & konstruksi baja. Garansi rapi, harga jujur." },
      { name: "author", content: "PT Pras Teknindo" },
      { property: "og:title", content: "Teralis Batam — Spesialis Besi & Stainless Steel No.1" },
      { property: "og:description", content: "Bengkel teralis Batam — fabrikasi teralis jendela, kanopi, railing tangga, rolling door, baja ringan & konstruksi baja. Garansi rapi, harga jujur." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Teralis Batam — Spesialis Besi & Stainless Steel No.1" },
      { name: "twitter:description", content: "Bengkel teralis Batam — fabrikasi teralis jendela, kanopi, railing tangga, rolling door, baja ringan & konstruksi baja. Garansi rapi, harga jujur." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4f2e206e-1f34-4b6e-974c-0eb163a0e65d/id-preview-af7cd27b--2bc687c0-c3c9-4798-8893-dc26d6c6baee.lovable.app-1777635912397.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4f2e206e-1f34-4b6e-974c-0eb163a0e65d/id-preview-af7cd27b--2bc687c0-c3c9-4798-8893-dc26d6c6baee.lovable.app-1777635912397.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}


