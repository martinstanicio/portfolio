import { defineDocumentType, makeSource } from "contentlayer/source-files";
import type { LocalDocument } from "contentlayer/source-files";

import { removeExtension } from "@/lib/utils";

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    img: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (s: LocalDocument) => removeExtension(s._raw.sourceFileName),
    },
  },
}));

export default makeSource({
  disableImportAliasWarning: true,
  contentDirPath: "content",
  documentTypes: [Project],
});
