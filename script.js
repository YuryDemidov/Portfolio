// Script changes preview-photo to site photo and shows comments
// instead of site info

var previewPicture = document.querySelectorAll('.preview__picture');
var sitePicture = document.querySelectorAll('.site__picture');
var siteInfo = document.querySelectorAll('.site__info');
var previewDescription = document.querySelectorAll('.preview__description');
var btnOpen = document.querySelectorAll('.preview__btn--open');
var btnClose = document.querySelectorAll('.preview__btn--close');

var rebuildSite = function(visibleLeftColumn, unvisibleLeftColumn, visibleRightColumn, unvisibleRightColumn, siteNumber) {
    btnOpen[siteNumber].addEventListener('click', function() {
      visibleLeftColumn[siteNumber].classList.add('preview__picture--invisible');
      unvisibleLeftColumn[siteNumber].classList.add('site__picture--visible');
      visibleRightColumn[siteNumber].classList.add('site-info--invisible');
      unvisibleRightColumn[siteNumber].classList.add('preview__description--visible');
      btnOpen[siteNumber].style = "display: none;";
      btnClose[siteNumber].style = "display: inline-block;";
    });
  return;
}

var goBackPlease = function(visibleLeftColumn, unvisibleLeftColumn, visibleRightColumn, unvisibleRightColumn, siteNumber) {
    btnClose[siteNumber].addEventListener('click', function() {
      visibleLeftColumn[siteNumber].classList.remove('preview__picture--invisible');
      unvisibleLeftColumn[siteNumber].classList.remove('site__picture--visible');
      visibleRightColumn[siteNumber].classList.remove('site-info--invisible');
      unvisibleRightColumn[siteNumber].classList.remove('preview__description--visible');
      btnOpen[siteNumber].style = "display: inline-block;";
      btnClose[siteNumber].style = "display: none;";
    });
  return;
}

for (var i = 0; i < previewPicture.length; i++) {
  rebuildSite(previewPicture, sitePicture, siteInfo, previewDescription, i);
  goBackPlease(previewPicture, sitePicture, siteInfo, previewDescription, i);
}

