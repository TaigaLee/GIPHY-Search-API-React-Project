![GA-Logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67) 

# React Giphy search

## MVP

Create a React app that lets a user search the Giphy API for gifs. There should be a search bar with a button.  When the user **presses enter or clicks the button**, the results of their search (GIFs) should be displayed.

## Bonus (that you really should tackle)

Style it with Semantic UI React.  It should look nice.  [Semantic UI React has great documentation.  Take a look at it to get a feel for how to use it.](https://react.semantic-ui.com/)

<details>
   <summary>Click here to see steps to install Semantic UI React</summary>
      
   1. `npm install semantic-ui-css`
   2. `npm install semantic-ui-react`
   3. Inside of `index.js`, above your `index.css`, `import 'semantic-ui-css/semantic.min.css';`

</details>
<br />

## Hungry for More?

Clicking a gif should open a `Details` modal with lots of info about that particular gif.

## Hungry for WAY More?  

1. Create dummy "login/logout" functionality:
    * Put some text "Log in" on the top right that opens a "Login" modal. 
    * After the user "logs in" (a dummy login...just store their username in state...and maybe a set a boolean `loggedIn` in state), the modal should disappear and the top right should now show "Logged in as [username]" and a link to "log out."  * Clicking "log out" should change state appropriately, and cause "Log in" to be displayed there. 
    * For the moment the site should work exactly the same otherwise.

2. Logged in users should be able view and edit their search history in a pop out menu.
    * Store a user's searches in `localStorage`.  It can only store key-value pairs as strings, so if you want to store arrays or objects, or more complex data structures, use `JSON.stringify()` before you store it, and `JSON.parse()` when retireving it.
    * Clicking a search should load it.
    * Each search should have an `x` next to it that removes it from the history when clicked.
    * Users that are not logged in should not be able to access the pop-out menu.
   
## If you really just can't get enough....

3. Read up about Firebase and store your search histories and login info there instead.  Don't worry about security.

4. If you didn't already, use some kind of dope animation for the opening & closing of the menu. 
