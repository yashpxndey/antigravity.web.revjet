# RevJet Deployment Guide

To get your website online and get a public `revjet.vercel.app` link, follow these steps. Since you don't have developer tools installed locally, we will use the **GitHub + Vercel** method which handles everything in the cloud.

## Step 1: Put your code on GitHub
1.  Log in to [GitHub.com](https://github.com).
2.  Click **New** to create a new repository.
3.  Name it `revjet` and click **Create repository**.
4.  On the setup page, click the link that says **"uploading an existing file"**.
5.  Open your `revjet` folder on your desktop, select **all files**, and drag them into the GitHub upload area.
    *   *Make sure you include `package.json`, `app/`, `components/`, and `public/`.*
6.  Click **Commit changes**.

## Step 2: Connect to Vercel
1.  Go to [Vercel.com](https://vercel.com) and sign in with your GitHub account.
2.  Click **Add New** > **Project**.
3.  You should see your `revjet` repository. Click **Import**.
4.  Click **Deploy**.

## Step 3: View your site
Vercel will build the site (this takes about 60 seconds). Once finished, it will give you a public URL like `revjet-yourname.vercel.app`.

---

### Need to make changes?
If you ever want to change the text or images, just go back to your GitHub repository, upload the new files, and Vercel will automatically update the website for you!
