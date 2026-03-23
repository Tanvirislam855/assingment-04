1 .Selectors!!!
Get elements by id: finds one specific elements by its id. Get elements by class name :Finds all elements with the same class. Query seletor:Finds only the first match using css selectors (like.class or id ) Query selector all: Finds all matchs and return a list

2 .Creating & Inserting
step 1 (create): use documents.create elements ('div') step 2 (style): add text with .inner text or classes with .class list step 3 (show):use.append child () to put it inside a parent on the page

3 . Event Bubbling When you click a child element, the event "bubbles up" to its parents, then grandparents, all the way to the top.

4. Event Delegation

Instead of giving a listener to every child, you give one to the parent. It catches events from its children, which saves memory and keeps code clean.

5. Prevent vs. Stop
prevent default(): Stops the browser from doing its default action (like a link opening). stop propagation(): Stops the event from bubbling up to the parents. Want me to show you a quick example of how stop propagation works in real life?

