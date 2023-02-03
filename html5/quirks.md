## **Quirks Mode**
In the old days of the web, pages were typically written in two versions: One for Netscape Navigator, and one for Microsoft Internet Explorer.
When the web standards were made at W3C, browsers could not just start using them, as doing so would break most existing sites on the web. 
Browsers therefore introduced two modes to treat new standards compliant sites differently from old legacy sites.

There are now three modes used by the layout engines in web browsers: quirks mode, limited-quirks mode, and no-quirks mode. 
In quirks mode, layout emulates behavior in Navigator 4 and Internet Explorer 5. 
This is essential in order to support websites that were built before the widespread adoption of web standards. 
In no-quirks mode, the behavior is (hopefully) the desired behavior described by the modern HTML and CSS specifications. 
In limited-quirks mode, there are only a very small number of quirks implemented.

The limited-quirks and no-quirks modes used to be called "almost-standards" mode and "full standards" mode, respectively. 
These names have been changed as the behavior is now standardized.
