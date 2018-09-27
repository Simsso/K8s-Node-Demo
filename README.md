# K8s Demo Application

## Steps
0. Create a GitHub repository
1. Write protect `master` branch (work is done in feature branches with PRs)
2. Create a simple Node.js application that has an HTTP endpoint (here `GET :80/`)
3. Add unit tests
4. Add [Google Cloud Build](https://github.com/apps/google-cloud-build) to the GitHub repository
5. Create a build trigger [in CGP](https://console.cloud.google.com/cloud-build/triggers) for "Production Update" (screenshot 1) and "Unit Tests"
6. Create the `cloudbuild.json` file and add `npm install` and `npm test` steps
7. Every commit and every PR should be checked (screenshot 2 and 3)