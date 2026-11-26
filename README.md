# Coralra

Project site for Coralra. This version shows the original document, unchanged, at `public/coralra.pdf`.

Project site: [https://cai7777777cheng.github.io/Coralra-website/](https://cai7777777cheng.github.io/Coralra-website/)

## Local

```bash
npm install
npm run dev
```

Dev server: [http://127.0.0.1:4734](http://127.0.0.1:4734).

```bash
npm run build
npm run preview
```

Preview: [http://127.0.0.1:4735](http://127.0.0.1:4735). The build is in `dist/`.

## GitHub Pages

- User site `https://<user>.github.io/`: `npm run build`.
- Project site `https://<user>.github.io/Coralra-website/`:

```bash
VITE_BASE_PATH=/Coralra-website/ npm run build
```

`vite.config.ts` reads `VITE_BASE_PATH` and copies `index.html` to `404.html`. `.github/workflows/pages.yml` builds with that base and deploys with GitHub Actions.
