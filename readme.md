
```
cd site-one
npm i
npm run build
mv build dashboard
```

```
cd site-two
npm i
npm run build
mv build home
```

then make an s3 bucket

and upload the two folders in there
and everyhting will just work!

so s3 should look like this
```
dashboard/
home/
```
