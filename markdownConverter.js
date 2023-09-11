import { remark } from "remark";
import remarkToc from "remark-toc";
import remarkFrontmatter from "remark-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter";
import remarkRehype from "remark-rehype";
import remarkBreaks from "remark-breaks";

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";
import torchlight from "remark-torchlight";

async function main() {
  let content = await remark()
    .use(remarkBreaks)
    .use(remarkToc)
    .use(remarkFrontmatter, ["yaml", "toml"])
    .use(remarkParseFrontmatter)
    .use(torchlight, {
      config: {
        token: "torch_dh7ZpZiZN2OSLjJas8lohyNPueof0LdSPO1N2872",
        theme: "material-theme-palenight",
        //cache: 'cache',
        torchlightAnnotations: true,
        lineNumbers: true,
      },
    })
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .process(process.argv[2]);

  console.log(JSON.stringify(content));
}

main();
