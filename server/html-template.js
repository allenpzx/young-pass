export const htmlTemplate = (title='default title', RootEle) =>`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <title>${title}</title>
    </head>
    <body>
        <div id="root">${RootEle}</div>
    </body>
    </html>
`;