# Vuepress-plugin-valine

> Support popluar comment plugins in Vuepress, such as Valine.

## Features

- Support Valine
- Dynamic Import
- Response router change and refresh automatic
- User can use passage's `$frontmatter`

## Usage

### Install

With `npm`:

```bash
npm install --save vuepress-plugin-valine
```

With `yarn`:

```bash
yarn add vuepress-plugin-valine -D
```

With `cnpm`:

```bash
cnpm i --save vuepress-plugin-valine
```

### Usage

The `options` is exactly the same as `Valine` configuration.

```javascript
module.exports = {
  plugins: [
    [
      'vuepress-plugin-valine',
      {
        appId: 'Your own appId',
        appKey: 'Your own appKey'
      }
    ]
  ]
}
```

## demo

[https://artiely.gitee.io](https://artiely.gitee.io)
