# Detect elements

This project includes several bookmarkets which you can use to detect elements on a webpage. This is used by people looking for errors in a webpage without going into inspect mode every time.

## How to use

Upload the script files in this repositary on your server so you can access them by:

```bash
https://example.com/Detect-Links.js
```

## Create a bookmark in your web browser and in the URL use the correct URL for the correct script:

```javascript
javascript: (function () {
  document.body.appendChild(document.createElement("script")).src =
    "https://www.example.com/detect-links.js";
  var iframes = document.getElementsByTagName("iframe");
  for (i = 0; i < iframes.length; i++) {
    iframes[i].contentDocument.body.appendChild(
      document.createElement("script")
    ).src = "https://www.example.com/detect-links.js";
  }
})();
```

## Done!

Now go to any website and run the bookmark at the top of your web browser and see the magic of how easy it is to see elements!
