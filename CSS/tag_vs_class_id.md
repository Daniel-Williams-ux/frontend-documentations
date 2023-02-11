## **CSS advanced**

Tag vs Class vs Id (Selectors)
Nowadays developers tend to target less IDs in their CSS. The reason behind is that IDs should always be unique on a page. And for a maximum flexibility, 
the usage of only classes simplify the reusability of parts of the UI.

Cascading or order

{ } - This selector selects all elements on the page. The code block within the curly braces will apply to all elements.
section { } - This selector selects all <section> elements on the page. The code block within the curly braces will apply only to <section> elements.

.my-class { } - This selector selects all elements that have the class my-class. The code block within the curly braces will apply to all elements with this class.

.my-block > .my-title { } - This selector selects all elements with class my-title that are immediate children of an element with class my-block. 
The code block within the curly braces will apply only to the elements that match this selector.

.my-block + .my-title { } - This selector selects the first element with class my-title that is immediately preceded by an element with class my-block. 
The code block within the curly braces will apply only to the element that matches this selector.

.my-block ~ .my-title { } - This selector selects all elements with class my-title that are preceded by an element with class my-block. 
The code block within the curly braces will apply to all elements that match this selector, not just the first one.

#my-div - This selector selects the element with the ID my-div. The code block within the curly braces will apply only to this element.
