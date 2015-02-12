Currently needs to be set up by Aaron, but new content can be written by anyone. Below is an example format, and you may also look at section_example.md in the repo. 

### Section Header

**Subheader** 

This is the body copy. If you want to make something bold, use **this** format. If you want italics, try *this*. 

**Subheader**

If you would like to include a link, try [something like this](http://example.com/ "Title"), or you don't need the title attribute at all if you don't want: [an example](http://example.com/)

**Text boxes**

Perhaps you would like a list! Here's one!

* List Item One
* Number Two
* Number Three

Of course everyone likes images. I use inline html for this so I can keep containers and CSS classes. There are a few CSS classes you can use depending on how wide of an image you want. The classes are: "third-width", "half-width", and "two-thirds-width". At the moment all images will stack vertically, not horizontally.

            
<div class='image-container'>
	<img class="two-thirds-width" src="images/create_symbol.png" />
</div>



## middleman-template

A middleman template just for me. Uses Haml, Sass, Bourbon, Neat, Livereload etc. and comes with some examples and settings.

### Installation
 
Clone the template into `~/.middleman`. You will need to create this directory if it doesn't exist.

```bash
$ git clone git://github.com/polarblau/middleman-template.git ~/.middleman/middleman-polarblau
```

Initialize middleman on a new or existing folder `$ middleman init PATH --template=middleman-polarblau`

### Todos  
Change static images to gifs  
Change content to markdown  
Makes images responsive  
Use symbols for CMD  


