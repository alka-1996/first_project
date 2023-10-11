import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
//import itemData from './itemData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

 
   
export default function BasicImageList() {
  const classes = useStyles();
  const itemData = [
    {
      img: '/assets/1.jpg',
      title: 'Image',
      author: 'author',
      cols: 2,
    },
    {
     img: '/assets/3.jpg',
     title: 'Image',
     author: 'author',
     cols: 2,
     position: 'absolute',
   },
   {
     img: '/assets/2.jpg',
     title: 'Image',
     author: 'author',
     cols: 2,
   },
  ];
console.log("itemData",itemData);
  return (
    <div>
      <ImageList rowHeight={160} className={classes.imageList} cols={3}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
