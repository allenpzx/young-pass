export const htmlTemplate = (title='', RootEle, buildPath) =>`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <title>${title}</title>
        <link rel="stylesheet" type="text/css" href="/${buildPath['main.css']}">
        <meta name="keywords" content="YoungPass 学生特权卡">
        <meta name="description" content="YoungPass 学生特权卡">
        <meta name="author" content="YoungPass 学生特权卡">
    </head>
    <body>
        <noscript>
            You need to enable JavaScript to run this app.
        </noscript>
        <div id="root">${RootEle}</div>
        <script src="/${buildPath['main.js']}"></script>
    </body>
    </html>
`;