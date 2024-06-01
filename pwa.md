# <center>PWA APP WITH NEXT JS</center>


### <center>Code for next.config.mjs</center>

```js
/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  swcMinify: true,
  reloadOnOnline: true,
  disable: false,
  workboxOptions: { disableDevLogs: true },
});

const nextConfig = {};

export default withPWA({ ...nextConfig });
```

<hr>

# <center> Code for manifest.json </center>

```json
{
  "name": "Next PWA",
  "short_name": "Next PWA",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```
<hr>
