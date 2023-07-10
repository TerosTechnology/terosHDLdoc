# TerosHDL Documentation

```
npm install
npm run start
```


## Image guidelines
We want a small shadow Background for every image, to this you can use ImageMagick 

In Ubuntu / WSL:
```
sudo apt install imagemagick
```

for a single image:
```bash
convert myimg.png \( +clone -background black -shadow 55x15+0+5 \) +swap -background none -layers merge  +repage myimg_shadowed.png
```

for an entire folder:
```bash
find *.png | xargs -I % convert % \( +clone -background black -shadow 55x15+0+5 \) +swap -background none -layers merge  +repage %
```