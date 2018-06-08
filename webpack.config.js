const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
	module: {
		rules: [
			{
			    test: /\.js?$/,
			    exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                }
			},
			{
				test:/\.html$/,
				use:{ loader: "html-loader",}
			},
			{
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
			},			
			{
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                use: ["file-loader"]
			}
       	]
 },
	plugins: [
		htmlWebpackPlugin
   ]
};
