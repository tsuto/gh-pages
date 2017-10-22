(function(ext) {
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.test = function(str) {
        /* ボタンが押されたときの処理を書く */
    };

    var descriptor = {
        blocks: [
            /* ブロックの定義を書く */
        ]
    };

    ScratchExtensions.register('Test', descriptor, ext);
})({});
