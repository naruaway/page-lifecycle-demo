# A Demo of Lifecycle API for Web Pages

This demo is useful when we want to check the state transition behavior based on [Lifecycle API for Web Pages](https://github.com/WICG/page-lifecycle).

It's using [page-lifecycle](https://github.com/GoogleChromeLabs/page-lifecycle) npm package provided by [GoogleChromeLabs](https://github.com/GoogleChromeLabs), which means we can use this to verify bugs of the library for specific device.

## How to use

```sh
npm ci
npm start
```

Then the server will launch and the URL will get copied to clipboard.
After opening the page in your device, you will see state transition log in that page.
