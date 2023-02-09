## **Lists**
Lists are used for listing ingredients in a recipe, a series of social icons, etc..

Type - Self-closing
Block -	No
Resources
ul: The Unordered List element - HTML: Hypertext Markup Language | MDN
li - HTML: Hypertext Markup Language | MDN
ol: The Ordered List element - HTML: Hypertext Markup Language | MDN
dl: The Description List element - HTML: Hypertext Markup Language | MDN
Ordered list (ol)
An ordered list is rendered as a numbered list.

<!-- an ordered list number -->
<ol>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ol>
<!-- an ordered list width Roman numerals -->
<ol type="i">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ol>
Unordered list (ul)
An unordered list is rendered as an unordered list of items.

<!-- flat list -->
<ul>
  <li>First bullet point</li>
  <li>Second bullet point</li>
  <li>Third bullet point</li>
</ul>
<!-- list with a nested list -->
<ul>
  <li>First bullet point</li>
  <li>Second bullet point
    <!-- Nested unorderd lit -->
    <ul>
      <li>First bullet point</li>
      <li>Second bullet point</li>
      <li>Third bullet point</li>
    </ul>
  </li> <!-- Closing li tag -->
  <li>Third bullet point</li>
</ul>
Definition list
A definition list is used to list terms and corresponding definitions.

<dl>
  <dt>Term</dt>
  <dd>Definition of the term</dd>
  <dt>Another term</dt>
  <dd>Another definition of the term</dd>
</dl>
