import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'

<ul class="gallery">

  {image?.data.map((image)=>(
    <ImageGalleryItem key={image.id} image={}/>
  ))}
  
</ul>