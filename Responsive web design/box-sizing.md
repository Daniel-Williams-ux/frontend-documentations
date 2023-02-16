# **Box-sizing**
Code example
*, *:before, *:after {
  box-sizing: border-box;
}


**The box-sizing Property**
Defines how the width and height of an element are calculated: should they include padding and borders, or not.

box-sizing: content-box (default):
#example1 {
  box-sizing: content-box;  
  width: 300px;
  height: 100px;
  padding: 30px;  
  border: 10px solid blue;
}
Width and height only apply to the content of the element:

This div has a width of 300px. But the full width is 300px + 20px (left and right border) + 60px (left and right padding) = 380px!


#example2 {
  box-sizing: border-box;
  width: 300px;
  height: 100px;
  padding: 30px;  
  border: 10px solid blue;
}
box-sizing: border-box:
Width and height apply to all parts of the element: content, padding and borders:

Here, the full width is 300px, no matter what!
