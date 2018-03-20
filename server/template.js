export default (html, assets, initialI18nStore, initialLanguage) => `
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="theme-color" content="#000000">
  <link rel="manifest" href="/manifest.json">
  <link rel="shortcut icon" href="/favicon.ico">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Fredoka+One">
  <link rel="stylesheet" href="/static/css/main.css">
  <title>Tox - A New Kind of Instant Messaging</title>
</head>

<body>
  <noscript>
    <h1>You need to enable JavaScript to run this app.</h1>
    <p>
      If you don't like JavaScript, go to our
      <a href="https://old.tox.chat">legacy website</a>.
    </p>
  </noscript>
  <div id="root">${html}</div>
  <script src="/static/js/bundle.js" defer></script>
  <script>
    window.initialI18nStore = JSON.parse('${JSON.stringify(initialI18nStore)}');
    window.initialLanguage = '${initialLanguage}';
  </script>            
</body>

</html>
`;
