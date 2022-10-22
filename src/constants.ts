import lang from "./data/languages.json";

export const { KNOWN_EXTENSIONS, KNOWN_LANGUAGES } = lang as {
    KNOWN_EXTENSIONS: Record<string, { image: string }>;
    KNOWN_LANGUAGES: { language: string; image: string }[];
};

export const EMPTY = "" as const;
export const FAKE_EMPTY = "\u200b\u200b" as const;

export const CONFIG_KEYS = {
    Enabled: "enabled" as const,
    App: {
        Id: "app.id" as const,
        Name: "app.name" as const
    } as const,
    Status: {
        Details: {
            Enabled: "status.details.enabled" as const,
            Idle: {
                Enabled: "status.details.idle.enabled" as const
            } as const,
            Text: {
                Idle: "status.details.text.idle" as const,
                Editing: "status.details.text.editing" as const,
                Debugging: "status.details.text.debugging" as const,
                Viewing: "status.details.text.viewing" as const
            } as const
        } as const,
        State: {
            Enabled: "status.state.enabled" as const,
            Idle: {
                Enabled: "status.state.idle.enabled" as const
            } as const,
            Text: {
                Idle: "status.state.text.idle" as const,
                Editing: "status.state.text.editing" as const,
                Debugging: "status.state.text.debugging" as const,
                Viewing: "status.state.text.viewing" as const,
                NoWorkspaceFound: "status.state.text.noWorkspaceFound" as const
            } as const
        } as const,
        Button: {
            Active: {
                Enabled: "status.button.active.enabled" as const,
                Label: "status.button.active.label" as const,
                Url: "status.button.active.url" as const
            } as const,
            Idle: {
                Enabled: "status.button.idle.enabled" as const,
                Label: "status.button.idle.label" as const,
                Url: "status.button.idle.url" as const
            } as const,
            Inactive: {
                Enabled: "status.button.active.enabled" as const,
                Label: "status.button.inactive.label" as const,
                Url: "status.button.inactive.url" as const
            } as const
        } as const,
        Image: {
            Large: {
                Idle: {
                    Key: "status.image.large.idle.key" as const,
                    Text: "status.image.large.idle.text" as const
                } as const,
                Editing: {
                    Key: "status.image.large.editing.key" as const,
                    Text: "status.image.large.editing.text" as const
                } as const,
                Debugging: {
                    Key: "status.image.large.debugging.key" as const,
                    Text: "status.image.large.debugging.text" as const
                } as const,
                Viewing: {
                    Key: "status.image.large.viewing.key" as const,
                    Text: "status.image.large.viewing.text" as const
                } as const
            } as const,
            Small: {
                Idle: {
                    Key: "status.image.small.idle.key" as const,
                    Text: "status.image.small.idle.text" as const
                } as const,
                Editing: {
                    Key: "status.image.small.editing.key" as const,
                    Text: "status.image.small.editing.text" as const
                } as const,
                Debugging: {
                    Key: "status.image.small.debugging.key" as const,
                    Text: "status.image.small.debugging.text" as const
                } as const,
                Viewing: {
                    Key: "status.image.small.viewing.key" as const,
                    Text: "status.image.small.viewing.text" as const
                } as const
            } as const
        } as const,
        Problems: {
            Enabled: "status.problems.enabled" as const,
            Text: "status.problems.text" as const
        } as const,
        Idle: {
            Check: "status.idle.check" as const,
            DisconnectOnIdle: "status.idle.disconnectOnIdle" as const,
            ResetElapsedTime: "status.idle.resetElapsedTime" as const,
            Timeout: "status.idle.timeout" as const
        } as const,
        ShowElapsedTime: "status.showElapsedTime" as const,
        ResetElapsedTimePerFile: "status.resetElapsedTimePerFile" as const
    } as const,
    Ignore: {
        Workspaces: "ignore.workspaces" as const,
        WorkspacesText: "ignore.workspacesText" as const,
        Repositories: "ignore.repositories" as const,
        Organizations: "ignore.organizations" as const,
        GitHosts: "ignore.gitHosts" as const
    } as const,
    File: {
        Size: {
            HumanReadable: "file.size.humanReadable" as const,
            Standard: "file.size.standard" as const,
            Round: "file.size.round" as const,
            Spacer: "file.size.spacer" as const
        } as const
    } as const,
    Behaviour: {
        AdditionalFileMapping: "behaviour.additionalFileMapping" as const,
        SuppressNotifications: "behaviour.suppressNotifications" as const,
        PrioritizeLanguagesOverExtensions: "behaviour.prioritizeLanguagesOverExtensions" as const,
        Debug: "behaviour.debug" as const
    } as const
} as const;
