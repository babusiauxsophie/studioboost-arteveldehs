module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy({
        'input/assets/styles/dist/': 'assets/styles/',
        'input/assets/images/': 'assets/img/',
        'input/assets/fonts/': 'assets/fonts/',
        'input/assets/videos/': 'assets/videos/',
        
    });

    return {
        dir: {
            input: './input/pages/',
            output: 'output',
            includes: '../_partials',
            layouts: '../_layouts',
            data: '../_data'
        }
    }
}