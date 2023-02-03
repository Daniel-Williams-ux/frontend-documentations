How do browsers determine which mode to use?
For HTML documents, browsers use a DOCTYPE in the beginning of the document to decide whether to handle it in quirks mode or standards mode. 
To ensure that your page uses full standards mode, make sure that your page has a DOCTYPE like in this example:

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hello World!</title>
  </head>
  <body></body>
</html>

The DOCTYPE shown in the example, <!DOCTYPE html>, is the simplest possible, and the one recommended by current HTML standards. 
Earlier versions of the HTML standard recommended other variants, but all existing browsers today will use full standards mode for this DOCTYPE, 
even the dated Internet Explorer 6. There are no valid reasons to use a more complicated DOCTYPE. 
If you do use another DOCTYPE, you may risk choosing one which triggers almost standards mode or quirks mode.

Make sure you put the DOCTYPE right at the beginning of your HTML document. 
Anything before the DOCTYPE, like a comment or an XML declaration will trigger quirks mode in Internet Explorer 9 and older.

The only purpose of <!DOCTYPE html> is to activate no-quirks mode. 
Older versions of HTML standard DOCTYPEs provided additional meaning, but no browser ever used the DOCTYPE for anything other than switching between render modes.
