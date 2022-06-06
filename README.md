1. Install CRA https://create-react-app.dev/
2. Install Prettier https://prettier.io/. Add script
3. Add VSCode extension, add .vscode -> settings.json https://code.visualstudio.com/docs/getstarted/settings
   {
   "editor.defaultFormatter": "esbenp.prettier-vscode",
   "editor.formatOnSave": true
   }
4. Install eslint https://eslint.org/ -> `npm init @eslint/config`. Add script
5. Extend eslint config with prettier and jest https://www.npmjs.com/package/eslint-plugin-jest

env: {
jest: true,
}. 6. Install storybook https://storybook.js.org/ 7. Remove unused files. Create structure 7. Install react router https://reactrouter.com/

Some useful articles
https://www.section.io/engineering-education/build-and-dockerize-a-full-stack-react-app-with-nodejs-and-nginx/
https://www.section.io/engineering-education/docker-push-for-publishing-images-to-docker-hub/
