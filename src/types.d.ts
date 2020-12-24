export interface WebpackConventionRoutingOptions {
  /**
   * 名称
   * @default 'webpack'
   */
  name?: string;

  /**
   * 要在其中搜索的当前工作目录。
   * @default 'src/view'
   */
  cwd?: string;

  /**
   * 配置匹配规则
   * @default
   */
  pattern?: string;

}
