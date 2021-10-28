# Roam-strikethrough-for-done-tasks
Adds temporary Strikethroughs for completed and archived tasks in Roam Research

The strikethroughs are temporary so don't ruin the text you have written. They are just slapped on using CSS.
This also adds strikethroughs to tasks you have archived using the [Todont](https://roamjs.com/docs/extensions/todont) roam/js extension.

To use it just copy the code below and paste it into a javascript codeblock under a roam/js block and hit "Yes, I know what I'm doing".

```javascript
(async () => {
  console.log("Adding Strikethrough for done tasks");
  const t = await fetch(
    "https://raw.githubusercontent.com/AProductiveNerd/Roam-strikethrough-for-done-tasks/main/index.js"
  );
  const js = await t.text();

  const ely = document.createElement("script");
  ely.setAttribute("type", "text/javascript");
  ely.innerText = js;
  document.getElementsByTagName("head")[0].appendChild(ely);
})();
```

PS: This is just a quick code snippet I made for my roam graph. It just checks the page you are currently viewing for any ARCHIVED or DONE tasks every 3 seconds and adds some CSS to them.

# Known Issues:
If you uncheck or unarchive a task, you have to refresh or reopen the page for the strikethrough to go away.
