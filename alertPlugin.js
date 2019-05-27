module.exports = function(babel) {
    const t = babel.types;
    return {
        visitor: {
            CallExpression: function(path){
                if(path.node.callee.name === "alert"){
                    const args = path.node.arguments;
                    path.replaceWith(
                        t.CallExpression(
                            t.MemberExpression(
                                t.identifier("console"),
                                t.identifier("log"),
                            ),
                            args
                        )
                    )
                }
            }
        }
    }
}