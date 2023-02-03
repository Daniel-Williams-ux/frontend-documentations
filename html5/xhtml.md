## **XHTML**
If you serve your page as XHTML using the application/xhtml+xml MIME type in the Content-Type HTTP header, 
you do not need a DOCTYPE to enable standards mode, as such documents always use 'full standards mode'. 
Note however that serving your pages as application/xhtml+xml will cause Internet Explorer 8 to show a download dialog box for an unknown format instead of 
displaying your page, as the first version of Internet Explorer with support for XHTML is Internet Explorer 9.

If you serve XHTML-like content using the text/html MIME type, browsers will read it as HTML, and you will need the DOCTYPE to use standards mode.

XHTML is a term that was historically used to describe HTML documents written to conform with XML syntax rules.

The following example shows an HTML document and corresponding "XHTML" document, and the accompanying HTTP Content-Type headers they should be served with.

HTML document
<!-- Content-Type: text/html -->

<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>HTML</title>
  </head>
  <body>
    <p>I am a HTML document</p>
  </body>
</html>

XHTML document
<!-- Content-Type: application/xhtml+xml -->

<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US">
  <head>
    <title>XHTML</title>
  </head>
  <body>
    <p>I am a XHTML document</p>
  </body>
</html>
Copy to Clipboard
In practice, very few "XHTML" documents are served over the web with a Content-Type: application/xhtml+xml header. 
Instead, even though the documents are written to conform to XML syntax rules, they are served with a Content-Type: text/html header — so 
browsers parse those documents using HTML parsers rather than XML parsers.
