const productionHostname = "bennettadvisory.co.nz";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === `www.${productionHostname}` ||
        (url.hostname === productionHostname && url.protocol !== "https:")) {
      url.hostname = productionHostname;
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    const assetResponse = await env.ASSETS.fetch(request);
    const isUtility = /^\/(design-system|thank-you)(\/|$)/.test(url.pathname) || assetResponse.status === 404;
    if (url.hostname === productionHostname && !isUtility) return assetResponse;

    const response = new Response(assetResponse.body, assetResponse);
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  },
};
