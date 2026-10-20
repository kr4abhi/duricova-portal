# DURICOVA Organics B2B Export Portal

React single-page application built with Vite.

## Run locally

```sh
npm install
npm run dev
```

Vite prints the local preview URL after startup.

## Validate a production build

```sh
npm run lint
npm run build
npm run preview
```

## Publish with GitHub and Vercel

1. Create a new **empty** repository on GitHub. Do not initialize it with a README, license, or `.gitignore`.
2. From this project directory, initialize Git and make the first commit:

   ```sh
   git init
   git add .
   git commit -m "Create DURICOVA React portal"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```

3. Sign in to Vercel and choose **Add New → Project**.
4. Import the GitHub repository you just pushed.
5. Keep the detected Vite settings, or use:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Root directory: `.`
6. Select **Deploy**. Vercel will provide a public URL. Later pushes to `main` trigger a new deployment automatically.

The GitHub repository should contain the contents of this `duricova-portal` folder. The original standalone HTML export is in the parent folder and is not needed for this React deployment.

## Demo behavior

The inquiry form, COA results, and some product data are illustrative frontend demos. Connect the form to a real backend or form service and replace sample records with verified company data before using this site for live business inquiries.
