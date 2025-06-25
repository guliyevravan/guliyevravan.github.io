// import { HtmlBasePlugin } from "@11ty/eleventy";
import { DateTime } from "luxon";

export default async function (eleventyConfig) {
 
  eleventyConfig.setInputDirectory('src'); 
  eleventyConfig.setIncludesDirectory("_includes");
  eleventyConfig.setLayoutsDirectory("_layouts");
  eleventyConfig.setDataDirectory("_data");
  eleventyConfig.setOutputDirectory("_site");
 
  eleventyConfig.addPassthroughCopy("./src/favicon.ico"); 
  eleventyConfig.addPassthroughCopy("./src/assets/css/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets/img"); 
  eleventyConfig.addPassthroughCopy("./src/assets/js");

  eleventyConfig.addFilter('numberFormat', number => {
    
    const country   = number.slice(0, 4);
    const operator  = number.slice(4, 6);
    const digit1    = number.slice(6, 9);
    const digit2    = number.slice(9, 11);
    const digit3    = number.slice(11, 13); 

    return (`${country} ${operator} ${digit1} ${digit2} ${digit3}`);

  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj, {
          zone: "Asia/Baku",
      }).setLocale('az').toFormat("dd.MM.yyyy");
  });

  eleventyConfig.addFilter("collapseWhitespace", str => {
    return str.replace(/\s+/g, ' ').trim();
  });

  // eleventyConfig.addDateParsing(function(dateValue) {
  //   return new Date(dateValue).getHours();
	// 	// return DateTime.fromFormat(dateValue, "yyyy-MM-dd hh:mm:ss z");
	// }); 
  
  // eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

  // eleventyConfig.addPassthroughCopy("img");
  // eleventyConfig.addPassthroughCopy("css/fonts");
  // eleventyConfig.addPassthroughCopy("**/*.jpg");
  // eleventyConfig.addPassthroughCopy("**/*.png", {
	// 	mode: "html-relative",
	// 	paths: [], // additional fallback directories to look for source files
	// 	failOnError: true, // throw an error when a path matches (via `match`) but not found on file system
	// 	copyOptions: { dot: false }, // `recursive-copy` copy options
  //  expand: true, // expand symbolic links
  //  debug: true, // log debug information
	// });

  // Copy `img/` to `_site/subfolder/img`
	// eleventyConfig.addPassthroughCopy({ img: "subfolder/img" });

	// Copy `src/img/` to `_site/subfolder/img`
	// eleventyConfig.addPassthroughCopy({ "src/img": "subfolder/img" });

	// Copy `random-folder/img/` to `_site/subfolder/img`
	// eleventyConfig.addPassthroughCopy({ "random-folder/img": "subfolder/img" });

  // Find and copy any `jpg` files in any folder to _site/img
	// Does not keep the same directory structure.
	// eleventyConfig.addPassthroughCopy({ "**/*.jpg": "img" });

  // eleventyConfig.setDataFileBaseName("index");
  // eleventyConfig.setDataFileSuffixes([".11tydata", ""]); 

  //  Render zamanı yaranan faylları göstərmək
  eleventyConfig.setQuietMode(true);

  // eleventyConfig.addPlugin(HtmlBasePlugin);

  // eleventyConfig.addLinter("linter-name", async function (content) {
    // console.log(content);
    // console.log(this.page);
	// });

  //  permalink /ad/ yerine /ad yazanda error vermemesi
  // eleventyConfig.configureErrorReporting({ allowMissingExtensions: true })

  // Set global permalinks to resource.html style
    // eleventyConfig.addGlobalData("permalink", () => {
    // 	return (data) =>
    // 		`${data.page.filePathStem}.${data.page.outputFileExtension}`;
    // });

	// Remove .html from `page.url`
	// eleventyConfig.addUrlTransform((page) => {
	// 	if (page.url.endsWith(".html")) {
	// 		return page.url.slice(0, -1 * ".html".length);
	// 	}
	// });

  // eleventyConfig.addUrlTransform((page) => {
	// 	// remove trailing slash from `page.url`
	// 	if (page.url !== "/" && page.url.endsWith("/")) {
	// 		return page.url.slice(0, -1);
	// 	}
	// });

  // Dynamic permalinks are enabled by default
	// eleventyConfig.setDynamicPermalinks(false);

  // eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  // eleventyConfig.addCollection("myCollectionName", async (collectionsApi) => {

  //   // console.log(collectionsApi.getAll());
	// 	// get unsorted items
	// 	// return collectionsApi.getAll();
	// });
  
};

// export const config = {
//   htmlTemplateEngine: "liquid",
// };

// export const config = {
// 	pathPrefix: "/my-path/",
// }