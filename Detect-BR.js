javascript: (function () {
    function callback() {
        function l() {
            $("strong").remove(".openSpan, .closeSpan");
            $("br").before("<strong class=\"openSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation;;speak:literal-punctuation;\">&lt;BR&gt;</strong>");
            $("br").after("<strong class=\"closeSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;/BR&gt;</strong>");
            $("[role=heading][aria-level=1]").prepend("<strong class=\"openSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;[role=heading][aria-level=1]&gt;</strong>");
            $("[role=heading][aria-level=1]").append("<strong class=\"closeSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;/[role=heading][aria-level=1]&gt;</strong>");
            $("[role=heading][aria-level=2]").prepend("<strong class=\"openSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;[role=heading][aria-level=2]&gt;</strong>");
            $("[role=heading][aria-level=2]").append("<strong class=\"closeSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;/[role=heading][aria-level=2]&gt;</strong>");
            $("[role=heading][aria-level=3]").prepend("<strong class=\"openSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;[role=heading][aria-level=3]&gt;</strong>");
            $("[role=heading][aria-level=3]").append("<strong class=\"closeSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;/[role=heading][aria-level=3]&gt;</strong>");
            $("[role=heading][aria-level=4]").prepend("<strong class=\"openSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;[role=heading][aria-level=4]&gt;</strong>");
            $("[role=heading][aria-level=4]").append("<strong class=\"closeSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;/[role=heading][aria-level=4]&gt;</strong>");
            $("[role=heading][aria-level=5]").prepend("<strong class=\"openSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;[role=heading][aria-level=5]&gt;</strong>");
            $("[role=heading][aria-level=5]").append("<strong class=\"closeSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;/[role=heading][aria-level=5]&gt;</strong>");
            $("[role=heading][aria-level=6]").prepend("<strong class=\"openSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;[role=heading][aria-level=6]&gt;</strong>");
            $("[role=heading][aria-level=6]").append("<strong class=\"closeSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;/[role=heading][aria-level=6]&gt;</strong>");
            if (!$('br').length && !$('[role=heading][aria-level=1]').length && !$('[role=heading][aria-level=2]').length && !$('[role=heading][aria-level=3]').length && !$('[role=heading][aria-level=4]').length && !$('[role=heading][aria-level=5]').length && !$('[role=heading][aria-level=6]').length) {
                $('body').prepend('<strong style="color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;" id="failure" role="status"></strong>');
                $('#failure').html('No paragraphs Found on Page: ' + document.title);
                setTimeout(function () { $('#failure').remove(); }, 6000);
            } else {
                $('body').append('<div id="success" role="alert" style="position:absolute; width:0; height:0; clip: rect(0,0,0,0);"></div>');
                $('#success').html('Success! Paragraphs Found on Page: ' + document.title);
                setTimeout(function () { $('#success').remove(); }, 3000);
            }
            $("script[src$='headings.js']").remove(); s.remove();
        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()