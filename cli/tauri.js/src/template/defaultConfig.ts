export default {
  build: {
    distDir: '../dist',
    devPath: 'http://localhost:4000',
    beforeDevCommand: '',
    beforeBuildCommand: ''
  },
  tauri: {
    bundle: {
      active: true,
      targets: 'all', // or an array of targets
      identifier: 'com.tauri.dev',
      icon: [
        'Content/32x32.png',
        'Content/128x128.png',
        'Content/128x128@2x.png',
        'Content/Icon.icns',
        'Content/Icon.ico'
      ],
      resources: [],
      externalBin: [],
      copyright: '',
      category: 'DeveloperTool',
      shortDescription: '',
      longDescription: '',
      deb: {
        depends: [],
        useBootstrapper: false
      },
      osx: {
        frameworks: [],
        minimumSystemVersion: '',
        useBootstrapper: false,
        exceptionDomain: ''
      }
    },
    allowlist: {
      all: true
    },
    windows: [
      {
        title: 'Tauri App',
        width: 800,
        height: 600,
        resizable: true,
        fullscreen: false
      }
    ],
    security: {
      csp:
        "default-src blob: data: filesystem: ws: http: https: 'unsafe-eval' 'unsafe-inline'"
    }
  }
}
