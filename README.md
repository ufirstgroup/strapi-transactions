# Transactions in Strapi v4

## How to run the project
Before running the project you will need a few things:
- node 
- docker
- tilt
- yarn

All of the versions of those tools can be found in the `.tool-versions` file.
If you have asdf installed, simply run `asdf install` to execute this file or install the tools needed manually.


Once the setup is ready, run those commands:
```
yarn
tilt up
```

## To stop the project
Simply do ctrl+c and run `tilt down`

## Transactions
You can find two tests that demonstrate how transactions are run in Strapi v4:
- One test will commit the data
- One test will do a rollback

You can find the tests here: src/api/product/__tests__

To run the tests you can use the following command:
```
 yarn test
```

## Env files
It is never a good idea to commit env files to a repo! But for this exercise and testing purposes I committed them.

## Acknowledgement

Code written by Geoffroy Baumier, Senior Software Engineer @ UFirst Group
