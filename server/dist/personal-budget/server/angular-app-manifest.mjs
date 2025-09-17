
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 778, hash: '31ff9fa3fa7f46d4bb64f0abda7eb5e3a5c11a0a909a741ee8d834a3c918fd7a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: '60a282a03de3ac816bbd7f9a382553766ce596cb8f6dc21124a3a41aa7add32f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 3347, hash: '4ef4b14965f7a3dd90e22526c78d2486e05e519163c4277bcbbdc2667f3c26dc', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 3346, hash: 'e1e59e4b43f517b2926e44f39a53e6940446b33da3890b87d190c49e88d455ea', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5138, hash: 'f6312c15a5123a3d2abc249fc803e4553d1b6b5ef7561e336b24199f1d174adf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QKWOAKOL.css': {size: 3288, hash: 'TH54dOkCt+8', text: () => import('./assets-chunks/styles-QKWOAKOL_css.mjs').then(m => m.default)}
  },
};
