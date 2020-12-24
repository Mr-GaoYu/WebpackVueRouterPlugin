import { WebpackConventionRoutingOptions } from "./types";
import { hook } from "./utils/webpack";
import { Compiler } from "webpack";
import { join, relative } from "path";
import glob from "glob";

const DEFAULTS = {
  name: "webpack",
  main: "src/views",
  include: [],
  exclude: ["**/components/**", "**/layouts/**", "**/utils/**"],
};

export default class WebpackConventionRoutingPlugin {
  private options: any;

  constructor(options:WebpackConventionRoutingOptions) {}

  apply(compiler: Compiler) {}


}
