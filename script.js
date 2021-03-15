$(function() {
    $(document).data("text", $("#editor").text())
        .on("mousedown", function() {
        $("#editor")
            .html($(this)
            .data("text"))
        })
        .on("mouseup", function() {
        that = $("#editor");
        var sel = window.getSelection ? window.getSelection() : document.selection();
        var o = that.text();
        var before = sel.baseOffset;
        var after = o.length - before;
        var a = "MALE ";
        var b = " FEMALE";
        var n = "<data>=</data>";
        var html = (after === "" ? a + n : a + n + b);
        that.html(html);
        });
    })