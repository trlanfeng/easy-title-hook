/**
 * useEditorTitle
 * @param name the title without edit or create
 * @param data the data to check, if exist, the title will be add 'edit' prefix, if not, will add 'create'
 */
export var useEditorTitle = function (name, data) {
    var title = function () {
        if (data)
            return "\u7F16\u8F91" + name;
        return "\u65B0\u5EFA" + name;
    };
    return title;
};
