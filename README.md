# react-img-handle-error
show html how to handle image get error.

two way to make the image request next image when meet error.

# 1. &lt;img>
 ```
 <img src={this.state.xxx}
 onError={()=>{...change xxx}}
 />
 ```

 # 2. css background-image
 ```
 style='background-image: url("static/ki-ringtone.mp3"), url("static/image1.jpg"), url("/static/media/logo.5d5d9eef.svg");'
 ```

when request fail, or the image can not display, it will change to next image.
