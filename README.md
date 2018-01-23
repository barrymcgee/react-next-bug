# react-next-bug

## Run project and replicate bug

```
yarn install
yarn dev
```

Then navigate your browser to: http://localhost:3000/

1. When you click on any of the items, you'll be taken to that specific product page
2. The data for that product will be pulled from Firebase and the product title will be displayed (as expected)
3. However, if you then refresh the page, you will see an error: **TypeError: Cannot read property 'fetch' of undefined**

The request happens here: https://github.com/barrymcgee/react-next-bug/blob/master/pages/product.js#L17

Does this cause a race condition? Why does only occur when the page is refreshed?
