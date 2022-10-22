import type { FileSizeConfig, FileSizeStandard, ExtenstionConfiguration } from "../config";
import { CONFIG_KEYS } from "../constants";
import type { Data } from "../data";
import { filesize } from "filesize";

export const getFileSize = async (config: ExtenstionConfiguration, dataClass: Data) => {
    if (!dataClass.fileSize) return;

    let round = 2;
    if (config.get(CONFIG_KEYS.File.Size.Round) === 0 || config.get(CONFIG_KEYS.File.Size.Round))
        round = config.get(CONFIG_KEYS.File.Size.Round);

    let spacer = " ";
    if (config.get(CONFIG_KEYS.File.Size.Spacer) === "" || config.get(CONFIG_KEYS.File.Size.Spacer))
        spacer = config.get(CONFIG_KEYS.File.Size.Spacer);

    let fileSize: string | undefined;
    const fileSizeStandard: FileSizeStandard = config.get(CONFIG_KEYS.File.Size.Standard) ?? "iec";
    const fileSizeConfig: FileSizeConfig = {
        round,
        spacer,
        standard: fileSizeStandard
    };

    fileSize = config.get(CONFIG_KEYS.File.Size.HumanReadable)
        ? (fileSize = filesize((await dataClass.fileSize) ?? 0, fileSizeConfig).toLocaleString())
        : (fileSize = `${dataClass.fileSize.toLocaleString()}${fileSizeConfig.spacer}B`);

    return fileSize;
};
