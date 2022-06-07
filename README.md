## Client

- Install CRA https://create-react-app.dev/
- Install Prettier https://prettier.io/. Add script
- Add VSCode extension, add .vscode -> settings.json https://code.visualstudio.com/docs/getstarted/settings

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

- Install eslint https://eslint.org/ -> `npm init @eslint/config`. Add script
- Extend eslint config with prettier and jest https://www.npmjs.com/package/eslint-plugin-jest

```js
    env: {
        jest: true,
    }
```

- Install storybook https://storybook.js.org/
- Remove unused files. Create structure
- Install react router https://reactrouter.com/

Some useful links
https://www.section.io/engineering-education/build-and-dockerize-a-full-stack-react-app-with-nodejs-and-nginx/
https://www.section.io/engineering-education/docker-push-for-publishing-images-to-docker-hub/

```
docker build -f Dockerfile.dev -t mdziarkach/js-news-mastery-client .
docker run -it -p 4002:3000 mdziarkach/js-news-mastery-client
docker push mdziarkach/js-news-mastery-client:latest

docker build -f Dockerfile.dev -t mdziarkach/js-news-mastery-api .
docker run -it -p 4003:3000 mdziarkach/js-news-mastery-api
docker push mdziarkach/js-news-mastery-api:latest

docker system prune --all --force --volumes // clean docker data
```

```
docker login
docker images
docker tag <hash> <docker-repository-name>
docker push <docker-repository-name>
```
