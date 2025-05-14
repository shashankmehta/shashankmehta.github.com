/**
 * Eleventy Configuration
 * This configuration replicates functionality from a Jekyll blog
 */
export default async function(eleventyConfig) {
    // Import the syntax highlighting plugin for code blocks
    const syntaxHighlight = await import("@11ty/eleventy-plugin-syntaxhighlight");
    eleventyConfig.addPlugin(syntaxHighlight.default);
    
    // Enable drafts in development mode if ELEVENTY_ENV is set to "development"
    const isDevelopment = process.env.ENVIRONMENT === "dev";

    // Copy static assets directly to the output folder
    eleventyConfig.addPassthroughCopy({
        "_assets/css": "css",
        "_assets/images": "images",
        "_assets/js": "js",
        "_assets/fonts": "fonts",
        "_assets/favicon.png": "favicon.png",
        "_assets/CNAME": "CNAME"
    });
    
    // Skip problematic files that would cause build errors
    eleventyConfig.ignores.add("_posts/2013-12-19-slickjs.md");
    
    // Create a collection for all blog posts
    // This makes it available as `collections.posts` in templates
    eleventyConfig.addCollection("posts", function(collectionApi) {
        const posts = collectionApi
            .getFilteredByGlob("_posts/**/*.{md,markdown}")
            .filter(item => isDevelopment || !item.data.draft) // Include drafts in development mode
            .sort((a, b) => b.date - a.date); // Sort newest first

        // console.log("Posts file paths:", posts.map(post => post.inputPath));

        return posts;
    });

    // Create a collection for draft posts (useful for development)
    eleventyConfig.addCollection("drafts", function(collectionApi) {
        return collectionApi
            .getFilteredByGlob("_posts/**/*.{md,markdown}")
            .filter(item => item.data.draft) // Only include posts with draft: true
            .sort((a, b) => b.date - a.date); // Sort newest first
    });
    
    // Set permalink structure for posts to match Jekyll's format
    eleventyConfig.addGlobalData("eleventyComputed", {
        permalink: function(data) {
            // For posts, use the Jekyll-style permalink
            if (data.page && data.page.inputPath.includes("/_posts/")) {
                const [year] = data.page.date.toISOString().split('-');
                return `/archive/${year}/${data.page.fileSlug}.html`;
            }
            return data.permalink;
        }
    });
    
    // Add date format filters for use in templates
    eleventyConfig.addFilter("formatDate", function(date) {
        return new Date(date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    });
    
    // Add the datetime filter for compatibility with Jekyll templates
    eleventyConfig.addFilter("datetime", function(date) {
        return new Date(date);
    });
    
    // Add highlight tag for compatibility with Jekyll syntax highlighting
    eleventyConfig.addLiquidTag("highlight", function(liquidEngine) {
        return {
            parse: function(tagToken, remainingTokens) {
                this.language = tagToken.args;
                this.tokens = [];
                
                const stream = liquidEngine.parser.parseStream(remainingTokens);
                stream
                    .on('token', token => {
                        if (token.name === 'endhighlight') {
                            stream.stop();
                        } else {
                            this.tokens.push(token);
                        }
                    })
                    .on('end', () => {
                        throw new Error("Missing endhighlight tag");
                    });
                stream.start();
            },
            
            render: function(context) {
                return `<pre class="language-${this.language}"><code class="language-${this.language}">` +
                       liquidEngine.renderer.renderTokens(this.tokens, context) +
                       `</code></pre>`;
            }
        };
    });
    
    // Add site-wide data (equivalent to Jekyll's _config.yml settings)
    eleventyConfig.addGlobalData("site", {
        name: "Shashank Mehta",
        url: "http://shashankmehta.in",
        description: "Heading product for RazorpayX, building the future of business banking. Early bird (#7) at @Razorpay. Forever hoarse throat thanks to ManUtd.",
        twitter: "shashankmehta05",
        github: "leostatic",
        gravatar_url: "http://www.gravatar.com/avatar/91d05b8aab2671b4abc8a8c76435bf5a",
        googleplus_user: '109764126807838271120',
        googleplus_hidden: false,
        google_analytics_tracking_id: "UA-32545112-1"
    });
    
    // Configure Markdown parsing options
    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        excerpt_separator: "<!--more-->"
    });
    
    // Define directory structure and other configuration
    return {
        dir: {
            input: ".",             // Root directory is the source
            output: "_site",        // Output generated site to _site directory
            includes: "_includes",  // Look for includes in _includes directory
            layouts: "_layouts"     // Look for layouts in _layouts directory
        },
        // Process files with these extensions as templates
        templateFormats: [
            "md",
            "html",
            "liquid",
            "njk",
            "11ty.js"
        ],
        pathPrefix: "/",
        markdownTemplateEngine: "liquid"  // Use liquid for markdown files
    };
};
