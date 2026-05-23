# Homework 5 — Structural Patterns: Adapter and Facade

## Description

Console utility for analyzing a file system directory and generating reports in different formats.

The project demonstrates two structural design patterns:

- Adapter
- Facade

## Features

- Recursive directory analysis
- File statistics collection
- JSON report generation
- CSV report generation
- XML report generation
- Automatic reports directory creation

## Design Patterns

### Facade

- `AnalyzerFacade` — low-level facade for coordinating analysis and formatting
- `ReportManager` — high-level facade for managing the whole report generation process

### Adapter

Adapters are used to support different export formats:

- `JsonReportAdapter`
- `CsvReportAdapter`
- `XmlReportAdapter`

## Project Structure

```txt
DirectoryReport.ts
DirectoryAnalyzer.ts
ReportAdapter.ts
JsonReportAdapter.ts
CsvReportAdapter.ts
XmlReportAdapter.ts
AnalyzerFacade.ts
ReportManager.ts
main.ts
```

## Installation

```bash
npm install
```

## Run

### JSON

```bash
npx ts-node main.ts "." json
```

### CSV

```bash
npx ts-node main.ts "." csv
```

### XML

```bash
npx ts-node main.ts "." xml
```

## Output

Generated reports are saved in the `reports/` directory.
