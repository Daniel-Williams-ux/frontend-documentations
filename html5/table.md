## **Tables**
A table element is used to wrap tabular content. It uses rows and columns to organize the data.

Accessibility tip: Always use <caption> to help people understand the content of your table.

Anatomy of a table
caption: the title of a table.
thead: groups multiple rows that represents the head of the columns
tbody: groups multiple rows that represents the body of the table
tfoot: groups multiple rows that represents the footer of the table
th: a cell as header of a group of table cells
tr: a row of cells
td: a cell of a table
col attribute: defines a column within a table.
colgroup attribute: defines a group of columns within a table.
<!-- Table with thead, tfoot, and tbody -->
<table>
  <caption>The table</caption>
  <thead>
    <tr>
      <th scope="col">Header content 1</th>
      <th scope="col">Header content 2</th>
      <th scope="col">Header content 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Body content 1</th>
      <td>Body content 2</td>
      <td>Body content 3</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Footer content 1</th>
      <td>Footer content 2</td>
      <td>Footer content 3</td>
    </tr>
  </tfoot>
</table>
<!-- Table without scope -->
<table>
  <caption>The table</caption>
  <thead>
    <tr>
      <th>Header content 1</th>
      <th>Header content 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Body content 1</td>
      <td>Body content 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer content 1</td>
      <td>Footer content 2</td>
    </tr>
  </tfoot>
</table>
Resources
table: The Table element - HTML: Hypertext Markup Language | MDN
thead: The Table Head element - HTML: Hypertext Markup Language | MDN
tbody: The Table Body element - HTML: Hypertext Markup Language | MDN
tfoot: The Table Foot element - HTML: Hypertext Markup Language | MDN
th - HTML: Hypertext Markup Language | MDN
tr: The Table Row element - HTML: Hypertext Markup Language | MDN
td: The Table Data Cell element - HTML: Hypertext Markup Language | MDN
