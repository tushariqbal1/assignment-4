1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    Ans: getElementByID -->Is used to find just one ‍specific element, Which have a unique name.
        getElementByClassName --> Is used to find multiple element Which have a specific name.
        querySelector --> Is used to select first matching element in css file.
        querySelectorAll --> Is used to select every matching element is css file.

2. How do you create and insert a new element into the DOM?
    Ans: 1. Create a new element.
         2. Add content.
         3. Insert all inside the DOM.
         Example : const newDiv = document.createElement('div');

3. What is Event Bubbling? And how does it work?
    Ans: Event Bubbling is a process where any child element is use event like ("click"), so that event step by step going to it's parent--> parent's paren--> document. 

4. What is Event Delegation in JavaScript? Why is it useful?
    Ans: Event Delegation is a process where we don't use eventListener for child element. We use eventListener for their parent element to find child.

5. What is the difference between preventDefault() and stopPropagation() methods?
    Ans: preventDefault() --> Is stop event's default behavior.
         stopPropagation() --> Is stop Event Bubbling.       
 (ভাইয়া এটা অনেক কষ্ট করেও একা একা উত্তর করতে পারি নি। তাই একটু Google থেকে Hints নিয়েছি)