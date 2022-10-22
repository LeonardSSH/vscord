import "source-map-support/register";

import { type ExtensionContext, commands, window } from "vscode";
import { getApplicationId } from "./helpers/getApplicationId";
import { RPCController } from "./controller";
import { CONFIG_KEYS } from "./constants";
import { getConfig } from "./config";
import { logInfo } from "./logger";

const controller = new RPCController(
    getApplicationId(getConfig()).clientId,
    getConfig().get(CONFIG_KEYS.Behaviour.Debug)
);

export const registerCommands = (ctx: ExtensionContext) => {
    const config = getConfig();

    const enable = async (update = true) => {
        if (update)
            try {
                await config.update(CONFIG_KEYS.Enabled, true);
            } catch (ignored) {}

        await controller.enable();
    };

    const disable = async (update = true) => {
        if (update)
            try {
                await config.update(CONFIG_KEYS.Enabled, false);
            } catch (ignored) {}

        await controller.disable();

        logInfo("[003] Destroyed Discord RPC client");
        controller.statusBarIcon.hide();
    };

    const enableCommand = commands.registerCommand("vscord.enable", async () => {
        await disable(false);
        await enable(false);

        logInfo("Enabled Discord Rich Presence.");

        if (!config.get(CONFIG_KEYS.Behaviour.SuppressNotifications))
            await window.showInformationMessage("Enabled Discord Rich Presence.");
    });

    const disableCommand = commands.registerCommand("vscord.disable", async () => {
        await disable(false);

        logInfo("Disabled Discord Rich Presence.");

        if (!config.get(CONFIG_KEYS.Behaviour.SuppressNotifications))
            await window.showInformationMessage("Disabled Discord Rich Presence.");
    });

    const enableWorkspaceCommand = commands.registerCommand("vscord.enableWorkspace", async () => {
        await disable();
        await enable();

        logInfo("Enabled Discord Rich Presence for this workspace.");

        if (!config.get(CONFIG_KEYS.Behaviour.SuppressNotifications))
            await window.showInformationMessage("Enabled Discord Rich Presence for this workspace.");
    });

    const disableWorkspaceCommand = commands.registerCommand("vscord.disableWorkspace", async () => {
        await disable();

        logInfo("Disabled Discord Rich Presence for this workspace.");

        if (!config.get(CONFIG_KEYS.Behaviour.SuppressNotifications))
            await window.showInformationMessage("Disabled Discord Rich Presence for this workspace.");
    });

    const reconnectCommand = commands.registerCommand("vscord.reconnect", async () => {
        logInfo("Reconnecting to Discord Gateway...");

        controller.statusBarIcon.text = "$(search-refresh) Connecting to Discord Gateway...";
        controller.statusBarIcon.tooltip = "Connecting to Discord Gateway...";

        await controller.login();
        await controller.enable();
    });

    const disconnectCommand = commands.registerCommand("vscord.disconnect", async () => {
        logInfo("Disconnecting from Discord Gateway...");

        await controller.destroy();

        controller.statusBarIcon.text = "$(search-refresh) Reconnect to Discord Gateway";
        controller.statusBarIcon.command = "vscord.reconnect";
        controller.statusBarIcon.tooltip = "Reconnect to Discord Gateway";
        controller.statusBarIcon.show();
    });

    ctx.subscriptions.push(
        enableCommand,
        disableCommand,
        enableWorkspaceCommand,
        disableWorkspaceCommand,
        reconnectCommand,
        disconnectCommand
    );

    logInfo("Registered Discord Rich Presence commands");
};

export async function activate(ctx: ExtensionContext) {
    logInfo("Discord Rich Presence for VS Code activated.");
    registerCommands(ctx);

    if (!getConfig().get(CONFIG_KEYS.Enabled)) await controller.disable();
}

export async function deactivate() {
    logInfo("Discord Rich Presence for VS Code deactivated.");
    await controller.destroy();
    logInfo("[004] Destroyed Discord RPC client");
}
