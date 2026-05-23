import * as fs from "fs";
import * as path from "path";
import { DirectoryReport } from "./DirectoryReport";

export class DirectoryAnalyzer {
  analyze(dirPath: string): DirectoryReport {
    const report: DirectoryReport = {
      files: 0,
      directories: 0,
      totalSize: 0,
      extensions: {},
    };

    const scanDirectory = (currentPath: string): void => {
      const items = fs.readdirSync(currentPath);

      for (const item of items) {
        const fullPath = path.join(currentPath, item);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
          report.directories++;
          scanDirectory(fullPath);
        }

        if (stats.isFile()) {
          report.files++;
          report.totalSize += stats.size;

          const extension = path.extname(item) || "no extension";
          report.extensions[extension] =
            (report.extensions[extension] || 0) + 1;
        }
      }
    };

    scanDirectory(dirPath);

    return report;
  }
}
