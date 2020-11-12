// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

const json5 = require('json5');

const supportedExtensions = ['.json', '.json5', '.jsc'];

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let panel: vscode.WebviewPanel | null;
	context.subscriptions.push(
		vscode.commands.registerCommand('jscharting.start', () => {
			const columnToShowIn = vscode.window.activeTextEditor
				? vscode.window.activeTextEditor.viewColumn
				: undefined;

			if (!columnToShowIn) {
				vscode.window.showWarningMessage('There is no configuration to process!');
				return;
			}

			const document = vscode.window.activeTextEditor?.document;
			if (!document) {
				return;
			}

			const uri = document.uri;
			if (uri.scheme !== 'file') {
				vscode.window.showWarningMessage(`Document scheme ${uri.scheme} not supported!`);
				return;
			}

			const fileName = path.basename(uri.path);
			const extName = path.extname(uri.path);
			const support = !!supportedExtensions.find(e => e.toLowerCase() === extName.toLowerCase());
			if (!support) {
				vscode.window.showWarningMessage(`File ${extName} not supported!`);
				return;
			}

			if (panel) {
				panel.reveal(columnToShowIn);
			} else {
				panel = vscode.window.createWebviewPanel(
					'jscharting',
					`${fileName} preview`,
					vscode.ViewColumn.One,
					{
						enableScripts: true
					}
				);
			}

			const json5OnDiskPath = vscode.Uri.file(
				path.join(context.extensionPath, 'node_modules', 'json5', 'dist/index.min.js')
			);
			const jschartingOnDiskPath = vscode.Uri.file(
				path.join(context.extensionPath, 'node_modules', 'jscharting', 'dist/jscharting.js')
			);

			const json5Src = panel.webview.asWebviewUri(json5OnDiskPath);
			const jschartingSrc = panel.webview.asWebviewUri(jschartingOnDiskPath);

			const draw = () => {
				if (!panel) {
					return;
				}

				const codeText = document.getText();

				let jsonVal;
				try {
					jsonVal = json5.parse(codeText);
				} catch {
					jsonVal = { };
				}

				jsonVal = fillData(jsonVal);
				let jsonString: string = JSON.stringify(jsonVal);

				panel.webview.html = getWebviewContent(
					json5Src,
					jschartingSrc,
					jsonString
				);
			};

			draw();

			panel.onDidDispose(
				() => {
					panel = null;
				},
				null,
				context.subscriptions
			);

			vscode.workspace.onDidChangeTextDocument((ev) => {
				if (ev.document !== document) {
					return;
				}

				draw();
			});
		})
	);

	return {
		extendMarkdownIt(md: any) {
			const highlight = md.options.highlight;

			md.options.highlight = (code: any, lang: any) => {
				if (lang && lang.match(/\bjscharting\b/i)) {
					return `<div class="jscharting">${code.trim()}</div>`;
				}

				return highlight(code, lang);
			};

			return md;
		}
	};
}

function getWebviewContent(
	json5Src: vscode.Uri,
	jschartingSrc: vscode.Uri,
	jschartingConfig: string
) {
	return `<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>JSCharting</title>
		</head>
		<body>
			<div id="chart"></div>
			<script src="${json5Src}"></script>
			<script src="${jschartingSrc}"></script>
			<script type="text/javascript">
				var chartElement = document.getElementById('chart');
				JSC.Chart(chartElement, ${jschartingConfig});
			</script>
		</body>
		</html>`;
}

export function deactivate() { }

function fillData(cfg:any){
	if(!cfg.series || cfg.series.length ===0){
		cfg.series = [
			{
				name:'Temporary Data',
				points:[
					{name:'A',y:20},
					{name:'B',y:50},
					{name:'C',y:150},
					{name:'D',y:75}
				]
			}
		];
	}
	return cfg;
}
