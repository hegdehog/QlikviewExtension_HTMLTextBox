Qva.AddExtension('HTML TextBox QV10', function() {

    this.Element.innerHTML = "<div style='width: 100%; height: 100%; overflow: auto;></div>"; this.Element.firstChild.innerHTML = this.Layout.Text0.text;

    setProps(this.Element.firstChild, this);

    function setProps(obj, parentObj) {
        obj.style.fontStyle = parentObj.Layout.Style.fontstyle;
        obj.style.fontFamily = parentObj.Layout.Style.fontfamily;
        obj.style.fontSize = parentObj.Layout.Style.fontsize + "pt";
    }
});