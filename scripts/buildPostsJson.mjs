#! /usr/bin/env node

/**
 * Run this after adding a new post to the markdown directory.
 * It will read all the markdown files and create a json file for the listing posts page.
 */

import { $, echo, chalk, fs, path, argv } from "zx";
import { remark } from "remark";
import remarkFrontmatter from "remark-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter";

const currentDate = new Date();

const { dev } = argv;

const directoryPath = './resources/markdown';
let files = null;

try {
  files = await fs.readdir(directoryPath);
} catch (error) {
  echo(chalk.bgRed.black.bold(
    "🚨 Error reading markdown files."
  ));
}

let allPosts = files.map(function (file) {
  const filePath = path.join(directoryPath, file); 
  const fileContent = fs.readFileSync(filePath, 'utf8');

  let post = remark()
    .use(remarkFrontmatter, ["yaml"])
    .use(remarkParseFrontmatter)
    .processSync(fileContent);

  return post.data.frontmatter;
})
.sort((a, b) => {
  return new Date(b.date) - new Date(a.date);
})
.filter(post => {
  if (!dev) {
    return !post.dev && new Date(post.date) <= currentDate && new Date(post.published_at) <= currentDate
  }
  return true;
});


await fs.writeJSON('./resources/json/posts.json', allPosts, { spaces: 2 });