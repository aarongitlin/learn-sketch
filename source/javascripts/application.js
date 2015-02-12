//= require 'vendor/jquery-1.10.2.min'

$( document ).ready(function() {

if ( $("body").hasClass('sketch') ) {
  $(".header-nav .sketch-link").addClass('activated');
}

if ( $("body").hasClass('keynote') ) {
  $(".header-nav .keynote-link").addClass('activated');
}

if ( $("body").hasClass('writing-briefs') ) {
  $(".header-nav .writing-briefs-link").addClass('activated');
}

});