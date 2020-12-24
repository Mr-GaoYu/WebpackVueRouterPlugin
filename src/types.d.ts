export interface WebpackConventionRoutingOptions {
  /**
   * 名称
   * @default 'webpack'
   */
  name?: string;

  /**
   * 入口文件
   * @default 'src/view'
   */
  main?: string;

  /**
   * 配置匹配规则
   * @default
   */
  include?: string | Array<string>;

  /**
   * 配置忽略规则
   * @default
   */
  exclude?: string | Array<string>;
}
