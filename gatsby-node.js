const path = require(`path`);
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // Query for all products in Shopify
  const result = await graphql(`
    query {
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            title
            images {
              originalSrc
            }
            shopifyId
            handle
            description
            availableForSale
            priceRange {
              maxVariantPrice {
                amount
              }
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  `);
  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/products/${node.handle}`,
      component: path.resolve(`./src/templates/product/product.js`),
      context: {
        product: node,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  // https://goenning.net/2017/07/21/how-to-avoid-relative-path-hell-javascript-typescript-projects/
  // https://www.gatsbyjs.com/docs/how-to/custom-configuration/add-custom-webpack-config/#absolute-imports
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@app": path.resolve(__dirname, "src/"),
        "@styling": path.resolve(__dirname, "src/styling/"),
        "@gatsby": path.resolve(__dirname, "src/styling/_gatsby"),
        "@hooks": path.resolve(__dirname, "src/styling/_hooks/"),
        "@animations": path.resolve(__dirname, "src/styling/animations/"),
        "@buttons": path.resolve(__dirname, "src/styling/buttons/"),
        "@carousel": path.resolve(__dirname, "src/styling/carousel/"),
        "@colors": path.resolve(__dirname, "src/styling/_theme/colorsTheme/"),
        "@decorative": path.resolve(__dirname, "src/styling/decorative/"),
        "@form": path.resolve(__dirname, "src/styling/form/"),
        "@icons": path.resolve(__dirname, "src/styling/icons/"),
        "@images": path.resolve(__dirname, "src/styling/media/images/"),
        "@input": path.resolve(__dirname, "src/styling/input/"),
        "@typography": path.resolve(__dirname, "src/styling/typography/"),
        "@layouts": path.resolve(__dirname, "src/styling/layouts/"),
        "@templates": path.resolve(__dirname, "src/styling/layouts/templates/"),
        "@layoutUtils": path.resolve(__dirname, "src/styling/layouts/utils/"),
        "@logo": path.resolve(__dirname, "src/styling/logo/"),
        "@maps": path.resolve(__dirname, "src/styling/maps/"),
        "@navbar": path.resolve(__dirname, "src/styling/navbar/"),
        "@navigation": path.resolve(__dirname, "src/styling/navigation/"),
        "@overlays": path.resolve(__dirname, "src/styling/overlays/"),
        "@shape": path.resolve(__dirname, "src/styling/shape/"),
        "@cards": path.resolve(__dirname, "src/styling/cards/"),
        "@interactive": path.resolve(__dirname, "src/styling/interactive/"),
        "@widget": path.resolve(__dirname, "src/styling/widget/"),
        "@utils": path.resolve(__dirname, "src/utils/"),
        "@theme": path.resolve(__dirname, "src/styling/_theme/"),
        "@domain": path.resolve(__dirname, "src/domains/entities/"),
        "@data": path.resolve(__dirname, "src/data/models/"),
        "@shopify": path.resolve(__dirname, "src/shopify-store/"),
      },
    },
  });
};
