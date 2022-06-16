### steps

```
cd site-one
npm i
PUBLIC_URL=/dashboard/ BUILD_PATH=dashboard npm run build
```

```
cd site-two
npm i
PUBLIC_URL=/home/ BUILD_PATH=home npm run build
```

**note** there will be no build folder, only a `home` or `dashboard`

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


###  Routing methods - Chose one or this code won't work

#### method 1 

also super important secret sauce when working with s3 

site one package.json
```
  ...
  "build": "BUILD_PATH=dashboard npm run build"
  ...
  "homepage": "/dashboard/",
  ...
```

site two  package.json
```
  ...
  "build": "BUILD_PATH=dashboard npm run build"
  ...
  "homepage": "/home/",
  ...

```

#### method 2

```
PUBLIC_URL=/dashboard/ BUILD_PATH=dashboard npm run build
```

this will make sure the build folder is named properly, so that when 
the files go into s3 they all reference itself properly



these things ensure the build points to the proper place when accessing things in s3

### finally

navigate to 
<s3-staticbuckete-url>/dashboard/#/invoices


### On your own -- Problems with Routing 

make sure you have hash routing implemented


### notes

this is a really good resource for how to put your entire project in a custom subfolder
you may have to take some of these extra steps in order to get yours working
https://skryvets.com/blog/2018/09/20/an-elegant-solution-of-deploying-react-app-into-a-subdirectory/

