module.exports = {
	pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

	siteTitle: "Vera's Awesome Dev Portfolio", // Navigation and Site Title
	siteTitleAlt: "Vera's Awesome Dev Portfolio", // Alternative Site title for SEO
	siteUrl: 'https://vks-portfolio.netlify.com', // Domain of your site. No trailing slash!
	siteLanguage: 'en', // Language Tag on <html> element
	siteBanner: '/social/banner.jpg', // Your image for og:image tag. You can find it in the /static folder
	favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
	siteDescription: 'A dev journal and sometimes portfolio for Vera', // Your site description
	author: 'Vera Simon', // Author for schemaORGJSONLD
	siteLogo: '/social/logo.png', // Image for schemaORGJSONLD

	// siteFBAppID: '123456789', // Facebook App ID - Optional
	//   userTwitter: '@minimal', // Twitter Username - Optional
	userTwitter: '@VeraSimonDev',
	ogSiteName: "Vera's Awesome Dev Portfolio", // Facebook Site Name - Optional
	ogLanguage: 'en_US', // Facebook Language

	// Manifest and Progress color
	// See: https://developers.google.com/web/fundamentals/web-app-manifest/
	themeColor: '#3498DB',
	backgroundColor: '#2b2e3c',

	// Settings for typography.js
	headerFontFamily: 'Bitter',
	bodyFontFamily: 'Open Sans',
	baseFontSize: '18px'
};
