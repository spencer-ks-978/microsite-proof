
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

in s3 you obviously need to set up a 
static site with

the error page set to `index.thml`

finally

navigate to 
<s3-staticbuckete-url>/dashboard/#/invoices


Problems making your own? 

make sure you have hash routing implemented


also super important secret sauce when working with s3 

site one package.json
```
  ...
  "homepage": "/dashboard/",
  ...
```

site two  package.json
```
  ...
  "homepage": "/home/",
  ...

```

these things ensure the build points to the proper place when accessing things in s3







