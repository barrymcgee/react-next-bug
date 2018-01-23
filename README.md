# react-next-bug

## Run project and replicate bug

```
yarn install
yarn dev
```

Then navigate your browser to: http://localhost:3000/

1. When you click on any of the items, you'll be taken to that specific product page
2. The data for that product will be pulled from Firebase and the product title will be displayed (as expected)

![](https://d2ffutrenqvap3.cloudfront.net/items/1M1n0T2O0f1g1z2F450u/Screen%20Shot%202018-01-23%20at%2010.24.34.png?v=341f1f1b "")

3. However, if you then refresh the page, you will see an error: **TypeError: Cannot read property 'fetch' of undefined**

![](https://d2ffutrenqvap3.cloudfront.net/items/3P1J0M2s0B1q0w0b3V13/Screen%20Shot%202018-01-23%20at%2010.24.45.png?v=76973589 "")

The request happens here: https://github.com/barrymcgee/react-next-bug/blob/master/pages/product.js#L17

Does this cause a race condition? Why does only occur when the page is refreshed?
