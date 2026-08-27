import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

const config = await loadQuartzConfig()

ExternalPlugin.FolderPage({
    sort: (f1, f2) => {
        const title1 = f1.frontmatter?.title ?? f1.slug ?? ""
        const title2 = f2.frontmatter?.title ?? f2.slug ?? ""
        return title1.localeCompare(title2, undefined, { numeric: true, sensitivity: "base" })
    }
})

export default config
export const layout = await loadQuartzLayout()
