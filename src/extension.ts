import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('vscode-restart.prompt-restart', () => {
	    vscode.window.showWarningMessage('Are you sure you want to restart VS Code?', 'Yes', 'No')
        .then(selection => {
            if (selection === 'Yes') {
				restart();
            }
        });
	}));

	context.subscriptions.push(vscode.commands.registerCommand('vscode-restart.no-prompt-restart', () => {
		restart();
	}));

	context.subscriptions.push(vscode.commands.registerCommand('vscode-restart.prompt-quit', () => {
	    vscode.window.showWarningMessage('Are you sure you want to quit VS Code?', 'Yes', 'No')
        .then(selection => {
            if (selection === 'Yes') {
				quit();
            }
        });
	}));

	context.subscriptions.push(vscode.commands.registerCommand('vscode-restart.no-prompt-quit', () => {
		quit();
	}));
}

export function deactivate() {}

function restart() {
	vscode.window.showInformationMessage('Code is restarting');
	vscode.commands.executeCommand("workbench.action.reloadWindow");
}

function quit() {
	vscode.window.showInformationMessage('Code is quitting');
	vscode.commands.executeCommand("workbench.action.quit");
}
