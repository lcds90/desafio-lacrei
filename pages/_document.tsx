import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

/**
 * MyDocument: The Document page of the web app
 * @return {JSX.Element} The JSX Code for the Document Page
 */
export default class MyDocument extends Document {
  /**
   * This is a workaround for styled-components not working with SSR
   * @param {DocumentContext} ctx The context of the document
   */
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
}
