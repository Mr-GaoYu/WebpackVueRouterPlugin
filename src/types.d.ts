export interface WebpackConventionRoutingOptions {
  /**
   * 名称
   * @default webpack
   */
  name?: string;

  /**
   * 要在其中搜索的当前工作目录。
   * @default src/view
   */
  cwd?: string;

  /**
   * 自定义配置路由文件匹配规则
   * @default
   */
  pattern?: Array<string>;

  /**
   * 自定义配置文件忽略规则，与 pattern 中 重合的规则，优先忽略
   * @default
   */
  ignore?: Array<string>;

  /**
   * 配置是否启用单数模式的目录
   * @default false
   */
  singular?: boolean;

  /**
   * 是否监听路由变化，当watch为false时，只生成一次路由
   * @default true
   */
  watch?: boolean;
  /**
   * 指定输出路径，不允许设定为 src、public、pages、mock、config 等约定目录
   * @default dist
   */
  output?: string;
}
