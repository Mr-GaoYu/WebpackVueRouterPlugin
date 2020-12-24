import { WebpackConventionRoutingOptions } from "./types";
import { hook } from "./utils/webpack";
import { Compiler } from "webpack";
import { join, relative } from "path";
import glob from "glob";

const DEFAULTS = {
  name: "webpack",
  cwd: "./demo/src/views",
  pattern: "**/*.vue",
};

export default class WebpackConventionRoutingPlugin {
  private options: any;

  constructor(options: WebpackConventionRoutingOptions) {
    this.options = Object.assign({}, DEFAULTS, options);
  }

  get cwd() {
    return join(process.cwd(), this.options.cwd);
  }

  apply(compiler: Compiler) {
    console.log(glob
      .sync(this.options.pattern, {
        cwd: this.cwd,
      }))
  }
}
