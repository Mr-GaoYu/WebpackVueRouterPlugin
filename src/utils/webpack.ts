export const hook  = (compiler, hookName, fn) => {
    if (compiler.hooks) {
        compiler.hooks[hookName].tap('WebpackBar:' + hookName, fn)
    } else {
        compiler.plugin(hookName, fn)
    }
}
