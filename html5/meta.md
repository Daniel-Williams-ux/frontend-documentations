<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!--
  The above 2 meta tags *must* come first in the <head>
  to consistently ensure proper document rendering.
  Any other head element should come *after* these tags.
 -->
<title>Page Title</title>

meta charset - defines the encoding of the website, utf-8 is the standard

meta name="viewport" - viewport settings related to mobile responsiveness

width=device-width - use the physical width of the device (great for mobile!)

initial-scale=1 - the initial zoom, 1 means no zoom

## **UTF-8 stands for what?**

UTF-8 stands for Unicode Transformation Format - 8-bit. It is a character encoding that is used to represent a wide range of characters 
and symbols from various scripts (including but not limited to Latin, Greek, Cyrillic, Chinese, Japanese, Korean, etc.).

UTF-8 is a variable-width encoding, meaning that it uses different numbers of bytes to represent different characters, and it can represent 
all possible characters in the Unicode standard, which includes over 120,000 characters. It's the most widely used character encoding on the 
web and is supported by all modern browsers and operating systems.

The HTML <meta charset="UTF-8"> is used to specify the character encoding for a web page.

UTF-8 is a character encoding that represents a wide range of characters (including all Unicode characters). It's widely used on the web and is compatible with a large number of languages and character sets.

By including <meta charset="UTF-8"> in the head of a web page, the browser knows which character encoding to use when rendering the page, ensuring that characters are displayed correctly and that special characters (such as those used in certain languages or for certain symbols) are displayed correctly.




##**UTF-8 stands for what?**
UTF-8 stands for Unicode Transformation Format - 8-bit. It is a character encoding that is used to represent a wide range of characters 
and symbols from various scripts (including but not limited to Latin, Greek, Cyrillic, Chinese, Japanese, Korean, etc.).

UTF-8 is a variable-width encoding, meaning that it uses different numbers of bytes to represent different characters, 
and it can represent all possible characters in the Unicode standard, which includes over 120,000 characters. 
It's the most widely used character encoding on the web and is supported by all modern browsers and operating systems.


**The HTML code <meta name="viewport" content="width=device-width, initial-scale=1"> is used to set the viewport for web pages on mobile devices.**

width=device-width sets the viewport width to the device's screen width.
initial-scale=1 sets the initial zoom level when the page is loaded, to 100%.
This code is necessary to ensure that the web page is properly scaled on mobile devices and provides an optimal user experience on smaller screens.

initial-scale=2 sets the initial zoom level when the page is loaded to 200%. 
This means that the web page will be scaled to two times its normal size when the page is first loaded on the device.

Note that the value of initial-scale can be any positive decimal number and it represents the zoom level as a multiplier. 
A value of 1 represents 100% zoom (i.e., normal size), a value of 0.5 represents 50% zoom (i.e., half size), and so on.


##**viewport-fit=cover**
The viewport-fit property is a new CSS property that was introduced in Safari iOS 11.3 and later, and it provides a way to control how the 
layout viewport (the part of the web page that's visible on the screen) fits within the visual viewport (the actual size of the device's screen).

The value cover for viewport-fit tells the browser to scale the layout viewport so that it covers the entire visual viewport. This can result in some of the layout viewport being cropped or hidden, but it ensures that the entire screen is used to display the content of the web page.

Note that viewport-fit is not yet widely supported across all browsers and devices, and it may not be supported in older browsers or on some older devices. 
As such, it's not commonly used at this time, but it may become more widely used in the future as support for it becomes more widespread.

##Viewport
The meta viewport gives information about the initial size of the viewport.

Tip: The viewport is used by mobile devices only.

**Accessibility tip: Never use maximum-scale=1.0. It prevents the user from zooming in on the website. It causes an accessibility issue.**
