import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Extension "vscode-restart" is now active');

	context.subscriptions.push(vscode.commands.registerCommand('vscode-restart.prompt', () => {
	    vscode.window.showWarningMessage('Are you sure you want to restart VS Code?', 'Yes', 'No')
        .then(selection => {
            if (selection === 'Yes') {
				restart();
            }
        });
	}));

	context.subscriptions.push(vscode.commands.registerCommand('vscode-restart.no-prompt', () => {
		restart();
	}));
}

export function deactivate() {}

function restart() {
	vscode.window.showInformationMessage('Code is restarting');
	vscode.commands.executeCommand("workbench.action.reloadWindow");
}
