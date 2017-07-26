# Shepherd Dog Blog

This blog is built on top of [Jekyll](https://jekyllrb.com) which is a static site generator written in Ruby. Making new posts and re-deploying the site to the production server should be simple when following these steps:


1. Make sure you have Jekyll installed. Follow the instructions on the site linked above.

1. Get the latest version of the site. If you haven't already cloned it from here, do that. If you have, pull any and all changes from here.

1. Copy one of the files in the `/_posts/CURRENT_YEAR` folder into a new file. Change the name of the file so that it starts with the current date (or the date that you will publish the post, if that is different) and has the title of the post without any special characters. Look at old posts if you need to see the format.

1. Write your post in your file

1. Run `jekyll serve` in this site's folder on your local machine. That will start a web server and you can see what your new post will look like. If you need to make any changes Jekyll will be watching for them and re-building the site so all you need to do to see them is refresh your browser.

1. Once you are happy with what you've written, commit your changes to git and push them to Github.

1. Deploy the site to the production server by running `rake deploy` in this site's folder on your local machine. You'll be prompted for a password which you should be able to find in the shared 1Password.


If something doesn't work, please update this README!

Thanks and happy posting!