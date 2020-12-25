import { WebpackConventionRoutingOptions } from "./types";
import { hook } from "./utils/webpack";
import { Compiler } from "webpack";
import { join, relative } from "path";
import glob from "glob";
import {
  readdirSync,
  statSync,
  readFileSync,
  writeFileSync,
  existsSync,
} from "fs";

const DEFAULTS = {
  name: "webpack",
  cwd: "./demo/src/views",
  pattern: ["**/*.vue"],
  ignore: [],
  singular: false,
  watch: true,
  output: ".demo/src/router",
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
    this.getRoutes();
  }

  getFiles(root: string) {
    if (!existsSync(root)) return [];

    return readdirSync(root).filter((file) => {
      const absFile = join(root, file);
      const fileStat = statSync(absFile);
      const isDirectory = fileStat.isDirectory();
      const isFile = fileStat.isFile();
      if (
        isDirectory &&
        ["components", "component", "utils", "util"].includes(file)
      ) {
        return false;
      }
      if (file.charAt(0) === ".") return false;
      if (file.charAt(0) === "_") return false;
      if (/\.(test|spec|e2e)\.(j|t)sx?$/.test(file)) return false;
      if (/\.d\.ts$/.test(file)) return false;

      return true;
    });
  }

  fileToRouteReducer() {}

  getRoutes() {
    const files = this.getFiles(join(this.cwd));

    const routes = files.reduce((init, file) => {
      const absFile = join(this.cwd, "", file);
      const stats = statSync(absFile);

      if (stats.isDirectory()) {
      } else {
      }

      return [];
    }, []);

    console.log(files);
  }
}
